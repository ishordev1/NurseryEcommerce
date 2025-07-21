package com.ecommerce.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDto {
    private String id;
    private List<CartItemDto> items;
    private double totalPrice;
}
