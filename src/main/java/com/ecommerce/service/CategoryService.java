package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dto.CategoryDto;

public interface CategoryService {
	 CategoryDto createCategory(CategoryDto categoryDto);

	    CategoryDto updateCategory(String categoryId, CategoryDto categoryDto);

	    void deleteCategory(String categoryId);

	    CategoryDto getCategoryById(String categoryId);

	    List<CategoryDto> getAllCategories();
}
