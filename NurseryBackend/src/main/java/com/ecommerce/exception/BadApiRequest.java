package com.ecommerce.exception;

public class BadApiRequest extends RuntimeException {
public BadApiRequest() {
	super();
}
public BadApiRequest(String message) {
	super(message);
}
}
