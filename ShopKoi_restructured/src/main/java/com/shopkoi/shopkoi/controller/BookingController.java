package com.shopkoi.shopkoi.controller;

import com.shopkoi.shopkoi.Service.BookingService;
import com.shopkoi.shopkoi.Service.CustomerService;
import com.shopkoi.shopkoi.model.entity.*;
import com.shopkoi.shopkoi.repository.ServiceRepository;
import com.shopkoi.shopkoi.repository.StaffRepository;
import com.shopkoi.shopkoi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.shopkoi.shopkoi.dto.BookingRequest;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    // Lấy tất cả booking
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Tạo booking mới
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest bookingRequest) {
        Long userId = bookingRequest.getUserId();
        Long staffId = bookingRequest.getStaffId();
        Long serviceId = bookingRequest.getServiceId();
        String bookingDate = bookingRequest.getBookingDate();
        String phone = bookingRequest.getPhone();
        String address = bookingRequest.getAddress();

        User user = userRepository.findById(userId).orElse(null);
        Staff staff = staffRepository.findById(staffId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);

        if (user == null || staff == null || service == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Tạo customer từ user và bổ sung phone, address
        Customer customer = customerService.createCustomerFromUser(user, phone, address);

        // Tạo booking
        Booking newBooking = bookingService.createBooking(customer, staff, service, bookingDate);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBooking);
    }

    // Lấy booking theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Cập nhật booking
    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(
            @PathVariable Long id,
            @RequestBody BookingRequest bookingRequest) {

        Booking booking = bookingService.getBookingById(id);
        if (booking == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Long staffId = bookingRequest.getStaffId();
        Long serviceId = bookingRequest.getServiceId();
        String bookingDate = bookingRequest.getBookingDate();

        Staff staff = staffRepository.findById(staffId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);

        if (staff == null || service == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        booking.setStaff(staff);
        booking.setService(service);
        booking.setBookingDate(bookingDate);

        Booking updatedBooking = bookingService.saveBooking(booking);

        return ResponseEntity.ok(updatedBooking);
    }

    // Xóa booking
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }
}