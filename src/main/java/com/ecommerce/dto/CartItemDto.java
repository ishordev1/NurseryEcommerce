package com.ecommerce.dto;

import com.ecommerce.entity.Cart;
import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductVariant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDto {
    private String id;
    private Cart cart;
    private ProductVariant productVariant;
    private int quantity;
    private double totalItemPrice;
}

