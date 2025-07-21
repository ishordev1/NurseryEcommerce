package com.ecommerce.service.Impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.OrdersDto;
import com.ecommerce.entity.Cart;
import com.ecommerce.entity.CartItem;
import com.ecommerce.entity.Orders;
import com.ecommerce.entity.Payment;
import com.ecommerce.entity.PaymentMode;
import com.ecommerce.entity.PaymentStatus;
import com.ecommerce.entity.OrderItem;
import com.ecommerce.entity.OrderStatus;
import com.ecommerce.entity.ProductVariant;
import com.ecommerce.entity.User;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.repository.ProductVariantRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

	private final OrderRepository orderRepository;
	private final UserRepository userRepository;
	private final CartRepository cartRepository;
	private final ModelMapper modelMapper;
	private final ProductVariantRepository productVariantRepository;

	@Override
	public OrdersDto placeOrder(String userId, OrdersDto ordersDto) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

		Cart cart = cartRepository.findByUser_Id(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Cart not found for user: " + userId));

		if (cart.getItems().isEmpty()) {
			throw new IllegalStateException("Cart is empty. Cannot place order.");
		}
		Orders order = this.modelMapper.map(ordersDto, Orders.class);

		order.setUser(user);
		order.setTotalAmount(cart.getTotalPrice());
	if(order.getPayment().getPaymentMode()==PaymentMode.COD) {
			
			order.setStatus(OrderStatus.PLACED);
		}
	else {
			order.setStatus(OrderStatus.PENDING);
		}
		
		order.setOrderDate(new Date());

		List<OrderItem> orderItems = new ArrayList<>();
		for (CartItem cartItem : cart.getItems()) {
			OrderItem orderItem = new OrderItem();
			orderItem.setOrders(order);
			orderItem.setProductVariant(cartItem.getProductVariant());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setPrice(cartItem.getTotalItemPrice());
			orderItems.add(orderItem);
		}
		order.setOrderItems(orderItems);
	
		//payment
		Payment payment = new Payment();
		payment.setAmount(order.getTotalAmount());
		payment.setPaymentStatus(PaymentStatus.PENDING);
		payment.setPaymentMode(order.getPayment().getPaymentMode()); 
		

		order.setPayment(payment);
		
		// Save order
		Orders savedOrder = orderRepository.save(order);

		// Clear cart
		cart.getItems().clear();
		cart.setTotalPrice(0);
		cartRepository.save(cart);

		return modelMapper.map(savedOrder, OrdersDto.class);
	}

	@Override
	public OrdersDto getOrderById(String orderId) {
		Orders order = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Order not found: " + orderId));

		return modelMapper.map(order, OrdersDto.class);
	}

	@Override
	public List<OrdersDto> getOrdersForUser(String userId) {
		List<Orders> orders = orderRepository.findByUser_Id(userId);

		return orders.stream().map(order -> modelMapper.map(order, OrdersDto.class)).toList();
	}

	@Override
	public void cancelOrder(String orderId) {
		Orders order = orderRepository.findById(orderId)
				.orElseThrow(() -> new ResourceNotFoundException("Order not found: " + orderId));

		order.setStatus(OrderStatus.CANCELLED);
		orderRepository.save(order);
	}

	@Override
	public OrdersDto placeDirectOrder(String userId, String variantId, int quantity, OrdersDto orders) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

		ProductVariant variant = productVariantRepository.findById(variantId)
				.orElseThrow(() -> new ResourceNotFoundException("Variant not found: " + variantId));

		Orders order = this.modelMapper.map(orders, Orders.class);
		order.setUser(user);
			order.setStatus(OrderStatus.PENDING);
			if(order.getPayment().getPaymentMode()==PaymentMode.COD) {
				
				order.setStatus(OrderStatus.PLACED);
			}
		
		order.setTotalAmount(variant.getPrice() * quantity);
		
		OrderItem item = new OrderItem();
		item.setOrders(order);
		item.setProductVariant(variant);
		item.setQuantity(quantity);
		item.setPrice(variant.getPrice());
		List list = new ArrayList<>();
		list.add(item);

		order.setOrderItems(list);
		order.setTotalAmount(variant.getPrice() * quantity);
		order.setOrderDate(new Date());
	//payment
		Payment payment = new Payment();
		payment.setAmount(variant.getPrice() * quantity);
		payment.setPaymentStatus(PaymentStatus.PENDING);
		payment.setPaymentMode(orders.getPayment().getPaymentMode()); 
		

		order.setPayment(payment);

		Orders savedOrder = orderRepository.save(order);
		return modelMapper.map(savedOrder, OrdersDto.class);
	}
	
	@Override
	public OrdersDto updateOrderAddress(String orderId,OrdersDto ordersDto) {
	Orders orders=	this.orderRepository.findById(orderId).orElseThrow(()-> new ResourceNotFoundException("order not found:"+orderId));
		orders.setShippingAddress(ordersDto.getShippingAddress());
		Orders saveOrders = this.orderRepository.save(orders);
	return this.modelMapper.map(saveOrders, OrdersDto.class);
	
	}
	@Override
	public void deleteOrder(String orderId) {
		Orders order = this.orderRepository.findById(orderId).orElseThrow(()-> new ResourceNotFoundException("order not found:"+orderId));
		this.orderRepository.delete(order);
	}

}

