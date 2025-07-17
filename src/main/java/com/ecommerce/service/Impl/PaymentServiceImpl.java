package com.ecommerce.service.Impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.PaymentDto;
import com.ecommerce.entity.Payment;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.PaymentRepository;
import com.ecommerce.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
private final PaymentRepository paymentRepository;
private final ModelMapper modelMapper;

@Override
public PaymentDto updatePayment(String paymentId) {
Payment payment=this.paymentRepository.findById(paymentId).orElseThrow(()-> new ResourceNotFoundException("payment not found in this Id:"+paymentId));	
return this.modelMapper.map(payment, PaymentDto.class);
}

}
