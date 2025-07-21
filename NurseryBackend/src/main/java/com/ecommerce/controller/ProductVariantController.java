package com.ecommerce.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.ProductVariantDto;
import com.ecommerce.service.ProductVariantService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/variants")
@RequiredArgsConstructor
public class ProductVariantController {

    private final ProductVariantService productVariantService;

    @PostMapping("/{productId}")
    public ResponseEntity<ProductVariantDto> createVariant(@PathVariable String productId,@RequestBody ProductVariantDto dto) {
        return ResponseEntity.ok(productVariantService.createVariant(productId,dto));
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ProductVariantDto>> getAllVariants(@PathVariable String productId) {
        return ResponseEntity.ok(productVariantService.getVariantsByProductId(productId));
    }

   
    
    @DeleteMapping("/{variantId}")
    public ResponseEntity<Void> deleteVariant(@PathVariable String variantId) {
        productVariantService.deleteVariant(variantId);
        return ResponseEntity.noContent().build();
    }
}