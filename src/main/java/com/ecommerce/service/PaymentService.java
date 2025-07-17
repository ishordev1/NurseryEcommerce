package com.ecommerce.service;

import com.ecommerce.dto.PaymentDto;

public interface PaymentService {
PaymentDto updatePayment(String paymentId,PaymentDto paymentDto);
}
