package com.ecommerce.dto;

import java.util.Date;
import java.util.List;

import com.ecommerce.entity.Address;
import com.ecommerce.entity.Role;
import com.ecommerce.entity.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	private String id;
    private String name;
    private String email;
    private String phone;
    private String password;
    private Role role;
    private List<AddressDto> addresses;
    private Date createdDate;
    private String profileImg;
}
