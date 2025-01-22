package com.russo_web.config;

import org.springframework.context.annotation.Bean; //registers the RestTemplate instance as a spring-managed bean
import org.springframework.context.annotation.Configuration; //marks this class as config provider for spring boot
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
    }
    
}
