package com.ecommerce.dto;

import com.ecommerce.entity.Orders;
import com.ecommerce.entity.ProductVariant;

import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDto {
	   private String id;
	    
	    private ProductVariantDto productVariant;
	    private int quantity;
	    private double price;
}
