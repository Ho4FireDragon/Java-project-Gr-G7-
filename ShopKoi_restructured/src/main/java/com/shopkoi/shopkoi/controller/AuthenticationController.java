package com.shopkoi.shopkoi.controller;

import com.nimbusds.jose.JOSEException;
import com.shopkoi.shopkoi.Service.AuthenticationService;
import com.shopkoi.shopkoi.dto.AuthenticationRequest;
import com.shopkoi.shopkoi.dto.response.AuthenticationResponse;
import com.shopkoi.shopkoi.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;


    @PostMapping("/login-staff")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            AuthenticationResponse response = authenticationService.authenticateStaff(authenticationRequest);
            return ResponseEntity.ok(response); // Trả về response với token
        } catch (JOSEException e) {
            // Nếu xảy ra lỗi, có thể là do thông tin xác thực không hợp lệ
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthenticationResponse("Invalid credentials", null));
        } catch (Exception e) {
            // Xử lý ngoại lệ khác nếu cần thiết
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse("An error occurred", null));
        }
    }



    @PostMapping("/login-customer")
    public ResponseEntity<AuthenticationResponse> authenticateCustomer(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            AuthenticationResponse response = authenticationService.authenticateCustomer(authenticationRequest);
            return ResponseEntity.ok(response); // Trả về response với token
        } catch (JOSEException e) {
            // Nếu xảy ra lỗi, có thể là do thông tin xác thực không hợp lệ
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthenticationResponse("Invalid credentials", null));
        } catch (Exception e) {
            // Xử lý ngoại lệ khác nếu cần thiết
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new AuthenticationResponse("An error occurred", null));
        }
    }






}
