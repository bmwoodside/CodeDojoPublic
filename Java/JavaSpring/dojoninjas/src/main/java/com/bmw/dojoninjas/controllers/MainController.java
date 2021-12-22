package com.bmw.dojoninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.bmw.dojoninjas.models.Dojo;
import com.bmw.dojoninjas.models.Ninja;
import com.bmw.dojoninjas.services.DojoService;
import com.bmw.dojoninjas.services.NinjaService;

@Controller
public class MainController {
	
	private DojoService dojoServ;
	private NinjaService ninjaServ;
	public MainController(DojoService dojoServ, NinjaService ninjaServ) {
		this.dojoServ = dojoServ;
		this.ninjaServ = ninjaServ;
	}
	
//	@GetMapping("/")
//	public String index(@ModelAttribute("dojo") Dojo dojo, Model model) {
//		model.getAttribute(null).getName();
//		
//		return "index.jsp";
//	}
	
	@GetMapping("/dojos/new")
	public String createDojo(Model model) {
		
		//empty Dojo to render
		Dojo dojo = new Dojo();
		model.addAttribute("dojo", dojo);
		return "newDojo.jsp";
	}
	
	@PostMapping("/newDojo")
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "index.jsp";
		} 
		dojoServ.saveDojo(dojo);
		return "redirect:/ninja/new";
	}
	
	@GetMapping("/dojo/{id}")
	public String oneDojo(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoServ.getOneDojo(id);
		model.addAttribute(dojo);
		return "showOneDojo.jsp";
	}
	
	@GetMapping("/ninja/new")
	public String createNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoServ.getAllDojos();
		model.addAttribute("dojos", dojos);
		return "ninja.jsp";
	}
	
	@PostMapping("/newNinja")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "ninja.jsp";
		}
		ninjaServ.saveNinja(ninja);
		return "redirect:/dojo/"+ninja.getDojo().getId();
	}
//	
//	@GetMapping("/dojo/{id}")
//	public String showOneDojo() {
//		
//		return "showOneDojo.jsp";
//	}
//	
	
}
