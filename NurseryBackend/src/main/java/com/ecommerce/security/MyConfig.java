package com.ecommerce.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ecommerce.Jwt.JwtAuthenticationEntryPoint;
import com.ecommerce.Jwt.JwtAuthenticationFilter;
import com.ecommerce.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@RequiredArgsConstructor
@Configuration
public class MyConfig {
private final UserDetailsService userDetailsService;
private final UserRepository userRepository;
private final JwtAuthenticationEntryPoint point;
private final JwtAuthenticationFilter filter;
@Bean
public BCryptPasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
}
@Bean
public AuthenticationProvider authenticationProvider() {
	DaoAuthenticationProvider dao=new DaoAuthenticationProvider();
	dao.setUserDetailsService(userDetailsService);
	dao.setPasswordEncoder(passwordEncoder());
	return dao;
}

@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	http.csrf(csrf-> csrf.disable()).authorizeHttpRequests(auth-> auth.requestMatchers("/api/*")
			.authenticated().anyRequest().permitAll())
	.exceptionHandling(ex-> ex.authenticationEntryPoint(point))
	.sessionManagement(session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)
	;
	
	return http.build();
}


@Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	return config.getAuthenticationManager();
}

	
}
