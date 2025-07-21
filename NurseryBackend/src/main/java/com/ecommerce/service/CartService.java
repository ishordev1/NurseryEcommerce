package com.ecommerce.service;

import com.ecommerce.dto.AddItemToCart;
import com.ecommerce.dto.CartDto;


public interface CartService {
    CartDto addItemToCart(String userId, String productId, int quantity);
    CartDto removeItemFromCart(String userId, String productId);
    CartDto getCartByUserId(String userId);
    void clearCart(String userId);

}
