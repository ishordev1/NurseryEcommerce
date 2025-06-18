package com.ecommerce.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.ProductVariantDto;
import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductVariant;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.ProductVariantRepository;
import com.ecommerce.service.ProductVariantService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductVariantServiceImpl implements ProductVariantService {

    private final ProductVariantRepository variantRepository;
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    @Override
    public ProductVariantDto createVariant(String ProductId,ProductVariantDto dto) {
        Product product = productRepository.findById(ProductId)
                .orElseThrow(() -> new ResourceNotFoundException("Product ID " + dto.getId()));

      ProductVariant variant = this.modelMapper.map(dto, ProductVariant.class);
      variant.setProduct(product);
        ProductVariant saved = variantRepository.save(variant);
        return modelMapper.map(saved, ProductVariantDto.class);
    }

    @Override
    public List<ProductVariantDto> getVariantsByProductId(String productId) {
        List<ProductVariant> variants = variantRepository.findByProductId(productId);
        return variants.stream()
                .map(variant -> modelMapper.map(variant, ProductVariantDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteVariant(String variantId) {
        ProductVariant variant = variantRepository.findById(variantId)
                .orElseThrow(() -> new ResourceNotFoundException("Variant ID " + variantId));
        variantRepository.delete(variant);
    }
    @Override
    public ProductVariantDto getVariantById(String variantId) {
        ProductVariant variant = variantRepository.findById(variantId)
                .orElseThrow(() -> new ResourceNotFoundException("Variant ID " + variantId));
    	return this.modelMapper.map(variant, ProductVariantDto.class);
    }
}
