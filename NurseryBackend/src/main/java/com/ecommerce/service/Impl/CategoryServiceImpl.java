package com.ecommerce.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.CategoryDto;
import com.ecommerce.entity.Category;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.service.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{
	 private final CategoryRepository categoryRepository;
	    private final ModelMapper modelMapper;

	    @Override
	    public CategoryDto createCategory(CategoryDto categoryDto) {
	        Category category = modelMapper.map(categoryDto, Category.class);
	        Category savedCategory = categoryRepository.save(category);
	        return modelMapper.map(savedCategory, CategoryDto.class);
	    }

	    @Override
	    public CategoryDto updateCategory(String categoryId, CategoryDto categoryDto) {
	        Category category = categoryRepository.findById(categoryId)
	                .orElseThrow(() -> new ResourceNotFoundException("Category ID"+ categoryId));

	        categoryDto.setId(categoryId);
	        
	        Category updatedCategory = categoryRepository.save(this.modelMapper.map(categoryDto, Category.class));
	        return modelMapper.map(updatedCategory, CategoryDto.class);
	    }

	    @Override
	    public void deleteCategory(String categoryId) {
	        Category category = categoryRepository.findById(categoryId)
	                .orElseThrow(() -> new ResourceNotFoundException("Category ID"+ categoryId));
if(category.getProduct()!=null) {
	throw new ResourceNotFoundException("category not delete, it have product..");
}
	        categoryRepository.delete(category);
	    }

	    @Override
	    public CategoryDto getCategoryById(String categoryId) {
	        Category category = categoryRepository.findById(categoryId)
	                .orElseThrow(() -> new ResourceNotFoundException("Category ID"+ categoryId));

	        return modelMapper.map(category, CategoryDto.class);
	    }

	    @Override
	    public List<CategoryDto> getAllCategories() {
	        List<Category> categories = categoryRepository.findAll();
	        return categories.stream()
	                .map(cat -> modelMapper.map(cat, CategoryDto.class))
	                .collect(Collectors.toList());
	    }
}
