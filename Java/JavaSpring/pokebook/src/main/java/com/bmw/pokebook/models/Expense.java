package com.bmw.pokebook.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="expenses")
public class Expense {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@NotNull
	@Size(min = 3, max = 200, message="must be between 3 and 200 characters long.")
	private String expenseName;
	@NotNull
	@Size(min = 3, max = 200, message="must be between 3 and 200 characters long.")
	private String vendor;
	@NotNull
	@DecimalMin(value = "0.01", message="must be greater than $0.01")
	private float amount;
	@NotNull
	@Size(min = 10, max = 300, message="must be between 10 and 300 characters long.")
	private String expenseDescription;
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	public Expense() {
	}
		
	public Expense(
			@NotNull @Size(min = 3, max = 200, message = "must be between 3 and 200 characters long.") String expenseName,
			@NotNull @Size(min = 3, max = 200, message = "must be between 3 and 200 characters long.") String vendor,
			@NotNull @DecimalMin(value = "0.01", message = "must be greater than $0.01") float amount,
			@NotNull @Size(min = 10, max = 300, message = "must be between 10 and 300 characters long.") String expenseDescription) {
		this.expenseName = expenseName;
		this.vendor = vendor;
		this.amount = amount;
		this.expenseDescription = expenseDescription;
	}
	
	
	// Getters & Setters
	
	

	public String getExpenseName() {
		return expenseName;
	}
	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	
	public String getExpenseDescription() {
		return expenseDescription;
	}
	public void setExpenseDescription(String expenseDescription) {
		this.expenseDescription = expenseDescription;
	}
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
}
