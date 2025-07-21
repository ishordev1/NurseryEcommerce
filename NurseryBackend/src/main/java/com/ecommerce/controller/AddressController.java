package com.ecommerce.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.AddressDto;
import com.ecommerce.dto.ApiResponse;
import com.ecommerce.service.AddressService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/addresses")
@RequiredArgsConstructor

public class AddressController {

    private final AddressService addressService;

    @PostMapping("/userid/{userId}")
    public ResponseEntity<AddressDto> createAddress(@PathVariable String userId,@RequestBody AddressDto addressDto) {
        return new ResponseEntity<>(addressService.createAddress(userId,addressDto), HttpStatus.CREATED);
    }

    @GetMapping("/userid/{userId}/{id}")
    public ResponseEntity<AddressDto> getAddressById(@PathVariable String userId,@PathVariable String id) {
        return ResponseEntity.ok(addressService.getAddressById(userId,id));
    }

    @GetMapping
    public ResponseEntity<List<AddressDto>> getAllAddresses() {
        return ResponseEntity.ok(addressService.getAllAddresses());
    }

    @PutMapping("/userid/{userId}/{id}")
    public ResponseEntity<AddressDto> updateAddress(@PathVariable String userId,@PathVariable String id, @RequestBody AddressDto addressDto) {
        return ResponseEntity.ok(addressService.updateAddress(userId,id, addressDto));
    }

    @DeleteMapping("/userid/{userId}/{id}")
    public ResponseEntity<ApiResponse> deleteAddress(@PathVariable String userId,@PathVariable String id) {
        addressService.deleteAddress(userId,id);
        ApiResponse apiResponse=ApiResponse.builder().message("address delete successfully").success(true).build();
        return new ResponseEntity<>(apiResponse,HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AddressDto>> getAddressesByUserId(@PathVariable String userId) {
        return ResponseEntity.ok(addressService.getAddressesByUserId(userId));
    }
}
