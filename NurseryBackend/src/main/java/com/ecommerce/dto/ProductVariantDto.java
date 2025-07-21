package com.ecommerce.dto;

import com.ecommerce.entity.Product;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductVariantDto {
	  private String id;
	  private String height;  
	    private double price;
	    private String color;
	    private int stock;
	    private String variantImageUrl;
	    private String ProductId;
	    
	   
}
