package com.ecommerce.controller;

import com.ecommerce.dto.OrdersDto;
import com.ecommerce.service.OrderService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    // 🛒 Place order from cart
    @PostMapping("/place/{userId}")
    public ResponseEntity<OrdersDto> placeOrder(@PathVariable String userId, @RequestBody OrdersDto order) {
        OrdersDto orderDto = orderService.placeOrder(userId, order);
        return ResponseEntity.ok(orderDto);
    }

    // 🧾 Place direct order (buy now)
    @PostMapping("/direct-buy")
    public ResponseEntity<OrdersDto> placeDirectOrder(
            @RequestParam String userId,
            @RequestParam String variantId,
            @RequestParam int quantity,
            @RequestBody OrdersDto orders
    ) {
        OrdersDto orderDto = orderService.placeDirectOrder(userId, variantId, quantity,orders);
        return ResponseEntity.ok(orderDto);
    }

    // 📜 Get order by ID
    @GetMapping("/{orderId}")
    public ResponseEntity<OrdersDto> getOrderById(@PathVariable String orderId) {
        OrdersDto orderDto = orderService.getOrderById(orderId);
        return ResponseEntity.ok(orderDto);
    }

    // 📄 Get all orders for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrdersDto>> getOrdersForUser(@PathVariable String userId) {
        List<OrdersDto> orders = orderService.getOrdersForUser(userId);
        return ResponseEntity.ok(orders);
    }

    // ❌ Cancel order
    @PostMapping("/cancel/{orderId}")
    public ResponseEntity<String> cancelOrder(@PathVariable String orderId) {
        orderService.cancelOrder(orderId);
        return ResponseEntity.ok("Order cancelled successfully.");
    }
    @PutMapping("/update")
    public ResponseEntity<OrdersDto> updateOrder(
    		@RequestParam String orderId,
    		@RequestBody OrdersDto orderDto
    		){
    	OrdersDto updateOrder = this.orderService.updateOrderAddress(orderId, orderDto);
    	return new ResponseEntity<>(updateOrder,HttpStatus.OK);
    }
    
    @DeleteMapping
    public ResponseEntity<String> deleteOrder(@RequestParam String orderId){
    	this.orderService.deleteOrder(orderId);
    	return ResponseEntity.ok("order delete successfully");
    }
    
}

