package com.ecommerce.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;

import lombok.Builder;

@Builder
public class ResourceNotFoundException extends RuntimeException{
public ResourceNotFoundException() {
	super("Resource not found");
}

public ResourceNotFoundException(String message) {
	super(message);
}
}
