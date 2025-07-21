package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dto.ProductDto;


public interface ProductService {

    ProductDto createProduct(ProductDto productDto);

    ProductDto updateProduct(String productId, ProductDto productDto);

    void deleteProduct(String productId);

    ProductDto getProductById(String productId);

    List<ProductDto> getAllProducts();
    List<ProductDto> getAllProductsByCategoryId(String categoryId);

    ProductDto addCategoryToProduct(String productId, List<String> categoryId);

    ProductDto removeCategoryFromProduct(String productId, List<String> categoriesId);
    
}
