package com.ecommerce.controller;


import com.ecommerce.dto.CartDto;
import com.ecommerce.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    // Add item to cart
    @PostMapping("/add/{userId}/{variantId}/{quantity}")
    public ResponseEntity<CartDto> addItemToCart(
            @PathVariable String userId,
            @PathVariable String variantId,
            @PathVariable int quantity) {
//    	System.out.println("useId:"+userId+" var:"+variantId+" quentity:"+quantity);

        CartDto cartDto = cartService.addItemToCart(userId, variantId, quantity);
        return ResponseEntity.ok(cartDto);
    }

    // Remove item from cart
    @DeleteMapping("/remove/{userId}/{cartItemId}")
    public ResponseEntity<CartDto> removeItemFromCart(
            @PathVariable String userId,
            @PathVariable String cartItemId) {

        CartDto cartDto = cartService.removeItemFromCart(userId, cartItemId);
        return ResponseEntity.ok(cartDto);
    }

    // Get cart by user ID
    @GetMapping("/{userId}")
    public ResponseEntity<CartDto> getCartByUserId(@PathVariable String userId) {
        CartDto cartDto = cartService.getCartByUserId(userId);
        return ResponseEntity.ok(cartDto);
    }

    // Clear cart
    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<String> clearCart(@PathVariable String userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok("Cart cleared successfully.");
    }
}

