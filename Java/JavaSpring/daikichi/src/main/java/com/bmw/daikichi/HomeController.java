package com.bmw.daikichi;


import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/hello")
public class HomeController {
//
//	public static void main(String[] args) {
//		SpringApplication.run(DaikichiApplication.class, args);
//	}
	@RequestMapping("")
	public String hello() {
		return "Hello World!";
	}
	
	@RequestMapping("/")
	public String test() {
		return "This is a test.";
	}
	
	@RequestMapping("/world")
	public String world() {
		return "Class level annotations are cool too!";
	}
}
