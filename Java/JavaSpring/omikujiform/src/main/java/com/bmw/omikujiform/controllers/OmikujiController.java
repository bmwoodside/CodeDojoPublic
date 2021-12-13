package com.bmw.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
//@RequestMapping("/omikuji")
public class OmikujiController {
	
	@RequestMapping("")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/omikuji/show")
	public String display(HttpSession session, Model model) {
		
		model.addAttribute("numberSelect", (Integer) session.getAttribute("numberSelect"));
		model.addAttribute("cityName", (String) session.getAttribute("cityName"));
		model.addAttribute("personName", (String) session.getAttribute("personName"));
		model.addAttribute("jobName", (String) session.getAttribute("jobName"));
		model.addAttribute("livingObject", (String) session.getAttribute("livingObject"));
		model.addAttribute("niceSaying", (String) session.getAttribute("niceSaying"));
		return "show.jsp";
	}
	
	@RequestMapping(value="/omikuji/submit", method=RequestMethod.POST)
	public String submit(
		HttpSession session,
		@RequestParam(value="numberSelect") int numberSelect,
		@RequestParam(value="cityName") String cityName,
		@RequestParam(value="personName") String personName,
		@RequestParam(value="jobName") String jobName,
		@RequestParam(value="livingObject") String livingObject,
		@RequestParam(value="niceSaying") String niceSaying
		
			) 
	{
		session.setAttribute("numberSelect", numberSelect);
		session.setAttribute("cityName", cityName);
		session.setAttribute("personName", personName);
		session.setAttribute("jobName", jobName);
		session.setAttribute("livingObject", livingObject);
		session.setAttribute("niceSaying", niceSaying);
		
		return "redirect:/omikuji/show";
	}
	
}
