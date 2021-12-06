package com.bmw.daikichi;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloHuman {
	
//	@RequestMapping("/")
//	public String test() {
//		return "Hello Human";
//	}
//	
	@RequestMapping("/")
	public String queryTest(@RequestParam(value="q", required=false) String searchQuery) {
		if (searchQuery == null) {
			return "Hello Human";
		}
		else {
			return "Hello " + searchQuery;
		}
	}

	
	
	
	
	
}
