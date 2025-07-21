package com.ecommerce.dto;

import java.util.List;

import com.ecommerce.entity.Product;

import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {
	private String id;
	private String name;
	private String description;
	private String imageName;
	 
}
