package com.bmw.pokebook.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bmw.pokebook.models.Expense;
import com.bmw.pokebook.services.ExpenseService;

@Controller
public class MainController {
	
	// add the services
	private ExpenseService expenseServ;
	
	public MainController(ExpenseService expenseServ) {
		this.expenseServ = expenseServ;
	}

	
	@RequestMapping("/")
	public String index(Model model) {
		
		// send forward all Expenses
		model.addAttribute("expenseName", expenseServ.getAllExpenses());
		
		// send forward an empty Expense for "create"
		Expense expense = new Expense();
		model.addAttribute("expense", expense);
		
		return "index.jsp";
	}
	
	
	
	
	
}
