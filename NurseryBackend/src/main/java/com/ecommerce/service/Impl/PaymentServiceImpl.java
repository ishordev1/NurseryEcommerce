package com.ecommerce.service.Impl;

import java.util.Date;

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
public PaymentDto updatePayment(String paymentId,PaymentDto paymentDto) {
Payment payment=this.paymentRepository.findById(paymentId).orElseThrow(()-> new ResourceNotFoundException("payment not found in this Id:"+paymentId));	
payment.setPaymentDate(new Date());
payment.setPaymentStatus(paymentDto.getPaymentStatus());
payment.setTransactionId(paymentDto.getTransactionId());
Payment paymentSave = this.paymentRepository.save(payment);
return this.modelMapper.map(paymentSave, PaymentDto.class);
}

}
