package com.ecommerce.dto;

import java.util.List;

import com.ecommerce.entity.Category;
import com.ecommerce.entity.ProductVariant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
	private String id;
	private String name;
    private String description;
    private String imageUrl;
    private List<String> categoryIds;
    private List<ProductVariantDto> productVariant;
}
