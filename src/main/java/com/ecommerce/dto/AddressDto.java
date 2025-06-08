package com.ecommerce.dto;

import java.util.Date;
import java.util.List;

import com.ecommerce.entity.Address;
import com.ecommerce.entity.Role;
import com.ecommerce.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
	 private String id;
	    private String street;
	    private String city;
	    private String state;
	    private String pincode;
	    private String country;
	    private boolean isDefault;

}
