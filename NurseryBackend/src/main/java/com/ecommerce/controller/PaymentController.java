package com.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.PaymentDto;
import com.ecommerce.service.PaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {
private final PaymentService paymentService;

@PutMapping("/{paymentId}")
public ResponseEntity<PaymentDto> updatePayment(@PathVariable String paymentId,@RequestBody PaymentDto paymentDto){
	PaymentDto updatePayment = this.paymentService.updatePayment(paymentId,paymentDto);
	return  ResponseEntity.ok(updatePayment);
}
}
