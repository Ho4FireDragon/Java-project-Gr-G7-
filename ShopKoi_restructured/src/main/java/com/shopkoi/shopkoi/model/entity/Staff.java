package com.shopkoi.shopkoi.model.entity;

import com.shopkoi.shopkoi.Service.StaffSchedule;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String staffname;
    private String staffemail;
    private String staffphone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")  // Mapping với entity Role
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})  // Bỏ qua các thuộc tính proxy khi chuyển đổi JSON
    private Role role;

    @Enumerated(EnumType.STRING)
    @Column(name = "staffschedule")
    private StaffSchedule staffschedule;

    private String staffpassword;

    // Constructors
    public Staff() {
    }

    public Staff(Long id, String staffname, String staffemail, String staffphone, Role role, StaffSchedule staffschedule, String staffpassword) {
        this.id = id;
        this.staffname = staffname;
        this.staffemail = staffemail;
        this.staffphone = staffphone;
        this.role = role;
        this.staffschedule = staffschedule;
        this.staffpassword = staffpassword;
    }

    // Getters và Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStaffname() {
        return staffname;
    }

    public void setStaffname(String staffname) {
        this.staffname = staffname;
    }

    public String getStaffemail() {
        return staffemail;
    }

    public void setStaffemail(String staffemail) {
        this.staffemail = staffemail;
    }

    public String getStaffphone() {
        return staffphone;
    }

    public void setStaffphone(String staffphone) {
        this.staffphone = staffphone;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public StaffSchedule getStaffschedule() {
        return staffschedule;
    }

    public void setStaffschedule(StaffSchedule staffschedule) {
        this.staffschedule = staffschedule;
    }

    public String getStaffpassword() {
        return staffpassword;
    }

    public void setStaffpassword(String staffpassword) {
        this.staffpassword = staffpassword;
    }
}
