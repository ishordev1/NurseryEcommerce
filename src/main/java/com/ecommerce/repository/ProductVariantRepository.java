package com.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.ProductVariant;

public interface ProductVariantRepository  extends JpaRepository<ProductVariant, String>{
List<ProductVariant> findByProductId(String productId);
}
