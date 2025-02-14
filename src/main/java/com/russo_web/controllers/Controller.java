package com.russo_web.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.russo_web.model.webUser.StringData;

@RestController

public class Controller {
    @RequestMapping("/hello")
    public String helloController() {
        return "<h1>This is my server side page</h1>";
    }

    @RequestMapping("/jsonClass")
    public String jsonController() {
        StringData sd = new StringData();
        sd.userEmail = "sallyk@temple.edu";
        sd.userPassword = "pass1234";
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writer().writeValueAsString(sd);
        } catch (Exception e) {
            return "Cannot convert object to JSON";
        }

    }

}
