package com.ecommerce.dto;

import java.util.Date;
import java.util.List;

import com.ecommerce.entity.OrderItem;
import com.ecommerce.entity.OrderStatus;
import com.ecommerce.entity.Payment;
import com.ecommerce.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDto {
	 private String id;
	    private List<OrderItemDto> orderItems;
	    private double totalAmount;
	    private OrderStatus status;
	    private Date orderDate;
	    private String shippingAddress;
	    private Payment payment;
}
