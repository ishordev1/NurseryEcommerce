package com.ecommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Address;

public interface AddressRepository extends JpaRepository<Address, String> {
	 List<Address> findByUserId(String userId);
}
