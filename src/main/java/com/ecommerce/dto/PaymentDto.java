package com.ecommerce.dto;

import java.util.Date;

import com.ecommerce.entity.PaymentMode;
import com.ecommerce.entity.PaymentStatus;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {
	 private String id;
	    private PaymentMode paymentMode; 
	    private PaymentStatus paymentStatus; 
	    private String transactionId; 
	    private double amount;
	    private Date paymentDate;
}
