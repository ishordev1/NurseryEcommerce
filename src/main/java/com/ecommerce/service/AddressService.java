package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dto.AddressDto;

public interface AddressService {
	AddressDto createAddress(String userId,AddressDto addressDto);
    AddressDto getAddressById(String userId,String id);
    List<AddressDto> getAllAddresses();
    AddressDto updateAddress(String userId,String id, AddressDto addressDto);
    void deleteAddress(String userId,String id);
    List<AddressDto> getAddressesByUserId(String userId);
}
