package com.bmw.pokebook.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		model.addAttribute("allExpenses", expenseServ.getAllExpenses());
		
		// send forward an empty Expense for "create"
		Expense expense = new Expense();
		model.addAttribute("newExpense", expense);
		
		return "index.jsp";
	}
	
	@PostMapping("/addExpense")
	public String addExpense(@Valid @ModelAttribute("newExpense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
//			System.out.println(result.getFieldErrors());
			return "index.jsp";
		}
		expenseServ.saveExpense(expense);
		return "redirect:/";
	}
	
	@RequestMapping("/expense/{id}/edit")
	public String editExpense(@PathVariable("id") Long id, Model model) {
		Expense expense = expenseServ.getOneExpense(id);
		model.addAttribute("expense", expense);
		return "edit.jsp";
	}
	
		
	@PutMapping("/expense/{id}")
	public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, @PathVariable("id") Long id) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		expenseServ.saveExpense(expense);
		return "redirect:/";
		
	}
	
	
}
