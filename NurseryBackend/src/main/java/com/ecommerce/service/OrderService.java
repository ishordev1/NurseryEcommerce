package com.ecommerce.service;
import com.ecommerce.dto.OrdersDto;

import java.util.List;

public interface OrderService {

    OrdersDto placeOrder(String userId, OrdersDto orders);

    OrdersDto getOrderById(String orderId);

    List<OrdersDto> getOrdersForUser(String userId);

    void cancelOrder(String orderId);
    OrdersDto placeDirectOrder(String userId, String variantId, int quantity,OrdersDto orders);
    OrdersDto updateOrderAddress(String orderId,OrdersDto ordersDto);
    void deleteOrder(String orderId);
}
