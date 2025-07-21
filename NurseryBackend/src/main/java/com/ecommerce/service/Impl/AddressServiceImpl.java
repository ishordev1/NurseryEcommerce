package com.ecommerce.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.AddressDto;
import com.ecommerce.entity.Address;
import com.ecommerce.entity.User;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.AddressRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.AddressService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService{
	 private final AddressRepository addressRepository;
	    private final UserRepository userRepository;
	    private final ModelMapper modelMapper;

	    @Override
	    public AddressDto createAddress(String userId,AddressDto addressDto) {
	        Address address = modelMapper.map(addressDto, Address.class);
	        User user=this.userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("user not found on this id:"+userId));
	       address.setUser(user);
	        return modelMapper.map(addressRepository.save(address), AddressDto.class);
	    }

	    @Override
	    public AddressDto getAddressById(String userId,String id) {
	        User user=this.userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("user not found on this id:"+userId));

	        Address address = addressRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Address not found"));
	        return modelMapper.map(address, AddressDto.class);
	    }

	    @Override
	    public List<AddressDto> getAllAddresses() {
	        return addressRepository.findAll()
	                .stream()
	                .map(address -> modelMapper.map(address, AddressDto.class))
	                .collect(Collectors.toList());
	    }

	    @Override
	    public AddressDto updateAddress(String userId,String id, AddressDto addressDto) {
	        User user=this.userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("user not found on this id:"+userId));

	    	Address address = addressRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Address not found"));

	        address.setStreet(addressDto.getStreet());
	        address.setCity(addressDto.getCity());
	        address.setState(addressDto.getState());
	        address.setPincode(addressDto.getPincode());
	        address.setCountry(addressDto.getCountry());
	        address.setDefault(addressDto.isDefault());

	        return modelMapper.map(addressRepository.save(address), AddressDto.class);
	    }

	    @Override
	    public void deleteAddress(String userId,String id) {
	        User user=this.userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("user not found on this id:"+userId));

	    	Address address = addressRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Address not found"));
	        addressRepository.delete(address);
	    }

	    @Override
	    public List<AddressDto> getAddressesByUserId(String userId) {
	        User user=this.userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("user not found on this id:"+userId));

	    	List<Address> addresses = addressRepository.findByUserId(userId);
	        return addresses.stream()
	                .map(address -> modelMapper.map(address, AddressDto.class))
	                .collect(Collectors.toList());
	    }
}
