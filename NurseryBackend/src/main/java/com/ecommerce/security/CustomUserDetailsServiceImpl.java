package com.ecommerce.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecommerce.entity.User;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.UserRepository;

@Service

public class CustomUserDetailsServiceImpl implements UserDetailsService {
@Autowired
private UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	User user=	this.userRepository.findByEmail(username).orElseThrow(()-> new ResourceNotFoundException("user not found on this email:"+username));
	List<GrantedAuthority> role=new ArrayList<>();	
	role.add(new SimpleGrantedAuthority("ROLE_"+user.getRole()));
	
	return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), role);
	}

}
