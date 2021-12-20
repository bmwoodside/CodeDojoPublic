package com.bmw.pokebook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bmw.pokebook.models.Expense;
import com.bmw.pokebook.repositories.ExpenseRepo;

@Service
public class ExpenseService {

	private final ExpenseRepo expenseRepo;
	public ExpenseService(ExpenseRepo expenseRepo) {
		this.expenseRepo = expenseRepo;
	}
	
	public List<Expense> getAllExpenses() {
		return expenseRepo.findAll();
	}
	
	// save
	public Expense saveExpense(Expense a) {
		return expenseRepo.save(a);
	}
	
	// delete
	public void deleteExpense(Long Id) {
		expenseRepo.deleteById(Id);
	}
	
	// get single expense
	public Expense getOneExpense(Long Id) {
		Optional<Expense> optionalExpense = expenseRepo.findById(Id);
		if (optionalExpense.isPresent()) {
			return optionalExpense.get();
		}
		else {
			return null;
		}
	}
	
	
	
}
