package com.shopkoi.shopkoi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //file  staff-images
        registry.addResourceHandler("/staff-images/**")
                .addResourceLocations("file:staff-images/");
    }
}
