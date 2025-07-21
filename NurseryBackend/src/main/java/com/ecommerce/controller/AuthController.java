package com.ecommerce.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Jwt.JWTHelper;
import com.ecommerce.dto.UserDto;
import com.ecommerce.security.Request;
import com.ecommerce.security.Response;
import com.ecommerce.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
private final UserService userService;
private final AuthenticationManager authenticationManager;
private  final JWTHelper jwtHelper;
private final UserDetailsService userDetailsService;


@PostMapping("/signup")
public ResponseEntity<UserDto> signup(@RequestBody UserDto userDto){
	UserDto user = this.userService.createUser(userDto);
return new ResponseEntity<UserDto>(user,HttpStatus.CREATED);

}

@PostMapping("/signin")
public ResponseEntity<Response> signIn(@RequestBody Request request) {
	Authentication authenticate = this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
UserDetails userDetails = this.userDetailsService.loadUserByUsername(authenticate.getName());
String token = this.jwtHelper.generateToken(userDetails);
UserDto userDto = this.userService.getUserByEmail(userDetails.getUsername());
Response response=Response.builder().userDto(userDto).token(token).build();
	
	return new ResponseEntity<Response>(response,HttpStatus.OK);
}


}
