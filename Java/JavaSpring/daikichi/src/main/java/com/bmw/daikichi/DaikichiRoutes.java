package com.bmw.daikichi;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DaikichiRoutes {
	
	
	@RequestMapping("/")
	public String index(@RequestParam(value="q", required=false) String searchQuery) {
		return "You searched for: " + searchQuery;
	}
	
	@RequestMapping("/daikichi")
	public String welcome() {
		return "Welcome!";
	}
	
	@RequestMapping("/daikichi/today")
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	
	@RequestMapping("/daikichi/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	
	@RequestMapping("/travel/{city}")
	public String travelCity(@PathVariable("city") String city) {
		return "Congratulations! You will soon travel to " + city;
	}
	
	@RequestMapping("/daikichi/lotto/{lottoNum}")
	public String lottoNum(@PathVariable("lottoNum") int lottoNum) {
		if (lottoNum % 2 == 0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers.";
		}
		else if (lottoNum % 2 != 0) {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
		}
		else {
			return "Something went wrong, please try again.";
		}
		
	}
	

}
