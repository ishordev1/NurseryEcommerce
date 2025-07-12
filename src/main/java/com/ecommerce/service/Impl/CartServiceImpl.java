package com.ecommerce.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.dto.AddItemToCart;
import com.ecommerce.dto.CartDto;
import com.ecommerce.entity.Cart;
import com.ecommerce.entity.CartItem;
import com.ecommerce.entity.Product;
import com.ecommerce.entity.ProductVariant;
import com.ecommerce.entity.User;
import com.ecommerce.exception.BadApiRequest;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CartItemRepository;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.ProductVariantRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.CartService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@Transactional
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductVariantRepository variantRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public CartDto addItemToCart(String userId, String variantId, int quantity) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

        ProductVariant variant = variantRepository.findById(variantId)
                .orElseThrow(() -> new ResourceNotFoundException("Variant not found: " + variantId));

        Cart cart = cartRepository.findByUser_Id(userId).orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setUser(user);
            newCart.setItems(new ArrayList<>());
            return cartRepository.save(newCart);
        });

        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(item -> item.getProductVariant().getId().equals(variantId))
                .findFirst();

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            item.setTotalItemPrice(item.getQuantity() * variant.getPrice());
        } else {
            CartItem item = new CartItem();
            item.setCart(cart);
            item.setProductVariant(variant);
            item.setQuantity(quantity);
            item.setTotalItemPrice(quantity * variant.getPrice());
            cart.getItems().add(item);
        }

        cart.setTotalPrice(cart.getItems().stream()
                .mapToDouble(CartItem::getTotalItemPrice).sum());

        return modelMapper.map(cartRepository.save(cart), CartDto.class);
    }

    @Override
    public CartDto removeItemFromCart(String userId, String cartItemId) {
        Cart cart = cartRepository.findByUser_Id(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user: " + userId));
CartItem cartItem=this.cartItemRepository.findById(cartItemId).orElseThrow(()-> new ResourceNotFoundException("cartItem not found on this id:"+cartItemId));
       

cart.getItems().removeIf(item -> item.getId().equals(cartItemId));
cartItemRepository.deleteById(cartItemId);
        cart.setTotalPrice(cart.getItems().stream()
                .mapToDouble(CartItem::getTotalItemPrice).sum());

        return modelMapper.map(cartRepository.save(cart), CartDto.class);
    }

    @Override
    public CartDto getCartByUserId(String userId) {
    	User us=this.userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("user not found on id:"+userId));
        Cart cart = cartRepository.findByUser_Id(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user: " + userId));

        return modelMapper.map(cart, CartDto.class);
    }

    @Override
    public void clearCart(String userId) {
        Cart cart = cartRepository.findByUser_Id(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user: " + userId));
        cart.getItems().clear();
        cart.setTotalPrice(0);
        cartRepository.save(cart);
    }
}
