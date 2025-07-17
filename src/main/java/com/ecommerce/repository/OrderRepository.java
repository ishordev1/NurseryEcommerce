package com.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Orders;

public interface OrderRepository extends JpaRepository<Orders, String>{
	 List<Orders> findByUser_Id(String userId);
}
