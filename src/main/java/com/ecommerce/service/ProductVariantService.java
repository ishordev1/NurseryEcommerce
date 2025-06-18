package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dto.ProductVariantDto;

public interface ProductVariantService {
    ProductVariantDto createVariant(String productId,ProductVariantDto dto);
    List<ProductVariantDto> getVariantsByProductId(String productId);
    void deleteVariant(String variantId);
    public ProductVariantDto getVariantById(String variantId);
}
