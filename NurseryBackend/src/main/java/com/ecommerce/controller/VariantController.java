package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.ProductVariantDto;
import com.ecommerce.service.ProductVariantService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/variants")
//@RequiredArgsConstructor
public class VariantController {
	@Autowired
private ProductVariantService productVariantService;

@GetMapping("/{variantId}")
public ResponseEntity<ProductVariantDto> getProductVariant(@PathVariable String variantId) {
	ProductVariantDto variant = this.productVariantService.getVariantById(variantId);
	return new ResponseEntity<>(variant,HttpStatus.OK);
}


}
