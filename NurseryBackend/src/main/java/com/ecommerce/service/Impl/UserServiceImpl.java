package com.ecommerce.service.Impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.AddressDto;
import com.ecommerce.dto.UserDto;
import com.ecommerce.entity.Address;
import com.ecommerce.entity.User;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;

	private final ModelMapper modelMapper;
private final PasswordEncoder passwordEncoder;
	@Override
	public UserDto createUser(UserDto userDto) {
	    User user = modelMapper.map(userDto, User.class);
	    user.setCreatedDate(new Date());

	    List<Address> addresses = userDto.getAddresses().stream().map(addressDto -> {
	        Address address = modelMapper.map(addressDto, Address.class);
	        address.setUser(user); 
	        return address;
	    }).collect(Collectors.toList());

	    user.setAddresses(addresses);
user.setPassword(this.passwordEncoder.encode(user.getPassword()));
	    User savedUser = userRepository.save(user);
	  
	    return modelMapper.map(savedUser, UserDto.class);
	}

	@Override
	public UserDto getUserById(String id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		return modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getAllUsers() {
		return userRepository.findAll().stream().map(user -> modelMapper.map(user, UserDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public UserDto updateUser(String id, UserDto userDto) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		userDto.setId(id);
		User user1=this.modelMapper.map(userDto, User.class);
		

		return modelMapper.map(userRepository.save(user1), UserDto.class);
	}

	@Override
	public void deleteUser(String id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found on this Id"+id));
		userRepository.delete(user);
	}
	
	@Override
	public UserDto getUserByEmail(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found"));
		return modelMapper.map(user, UserDto.class);
	}
	
}
