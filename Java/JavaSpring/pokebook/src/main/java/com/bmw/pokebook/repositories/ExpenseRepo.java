package com.bmw.pokebook.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.bmw.pokebook.models.Expense;

public interface ExpenseRepo extends CrudRepository<Expense, Long> {
	// get all expenses
	List<Expense> findAll();
	
	// get one Expense by ID
	Optional<Expense> findById(Long Id);
	
	// save expense (for update and create)
	// Expense save(Expense a);
	
	
	// delete Expense by ID
	void deleteById(Long Id);
	
	
	
	
}
