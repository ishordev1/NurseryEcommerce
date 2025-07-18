package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dto.UserDto;

public interface UserService {
	UserDto createUser(UserDto userDto);

	UserDto getUserById(String id);

	List<UserDto> getAllUsers();

	UserDto updateUser(String id, UserDto userDto);

	void deleteUser(String id);
}
