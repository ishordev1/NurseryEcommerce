package com.ecommerce.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.CategoryDto;
import com.ecommerce.dto.ProductDto;
import com.ecommerce.entity.Category;
import com.ecommerce.entity.Product;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	private final ModelMapper modelMapper;

	@Override
	public ProductDto createProduct(ProductDto productDto) {
		Product product = modelMapper.map(productDto, Product.class);
		Product saved = productRepository.save(product);
		ProductDto responseDto = modelMapper.map(saved, ProductDto.class);
		return responseDto;
	}

	@Override
	public void deleteProduct(String productId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found"));
		// Optional: clear product from categories (to clean join table)
		product.getCategories().forEach(cat -> cat.getProduct().remove(product));
		productRepository.delete(product);
	}

	@Override
	public ProductDto getProductById(String productId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found on this ID" + productId));
		ProductDto dto = modelMapper.map(product, ProductDto.class);
		return dto;
	}

	@Override
	public List<ProductDto> getAllProducts() {
		List<Product> products = productRepository.findAll();
		return products.stream().map(product ->
		modelMapper.map(product, ProductDto.class)).collect(Collectors.toList());
	}

	@Override
	public List<ProductDto> getAllProductsByCategoryId(String categoryId) {
		List<Product> products = productRepository.findBycategories_Id(categoryId);

	return products.stream().map(product-> 
	this.modelMapper.map(product, ProductDto.class)).collect(Collectors.toList());
	}

	@Override
	public ProductDto updateProduct(String productId, ProductDto productDto) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found on this ID" + productId));

		product.setName(productDto.getName());
		product.setDescription(productDto.getDescription());
		product.setImageUrl(productDto.getImageUrl());
		List<String> catsId=productDto.getCategories().stream().map(cat-> cat.getId()).collect(Collectors.toList());
		List<Category> categores = this.categoryRepository.findAllById(catsId);
		product.setCategories(categores);
		Product updated = productRepository.save(product);
		ProductDto dto = modelMapper.map(updated, ProductDto.class);
		return dto;	
	}

	@Override
	public ProductDto addCategoryToProduct(String productId, List<String> categoriesId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found: " + productId));

		List<Category> categories = categoryRepository.findAllById(categoriesId);

		// Add all categories to the product
		product.getCategories().addAll(categories);

		Product updated = productRepository.save(product);

		return this.modelMapper.map(updated, ProductDto.class);
	}

	@Override
	public ProductDto removeCategoryFromProduct(String productId, List<String> catList) {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found: " + productId));
		List<Category> categories = categoryRepository.findAllById(catList);
		// Remove all matching categories from the product
		product.getCategories().removeAll(categories);
		Product updated = productRepository.save(product);
		ProductDto productDto = modelMapper.map(updated, ProductDto.class);
		return productDto;
	}

}
