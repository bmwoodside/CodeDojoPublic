package com.bmw.booksDemo.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="authors")
public class Author {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@NotEmpty(message = "Please add a value to the First Name field!")
	@Size(min=2, max=100, message="First Name must be between 2-100 characters!")
	private String firstName;
	
	@NotEmpty(message = "Please add a value to the Last Name field!")
	@Size(min=2, max=100, message="Last Name must be between 2-100 characters!")
	private String lastName;
	
	@Min(18)
	@Max(100)
	@Null(message="Enter an Age between 18 and 100.")
	private Integer age;
	
	
	// add in the created/updated fields
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
	// TO-DO
	// add the code for database "CreatedAt" and "UpdatedAt" here.
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
	
	// one to many relationship with book
	
	@OneToMany(mappedBy="author", fetch=FetchType.LAZY)
	private List<Book> booksWritten;
	
	
	// Constructors
	
	public Author() {} // why an empty constructor?

	public Author(
			@NotEmpty(message = "Please add a value to the First Name field!") @Size(min = 2, max = 100, message = "First Name must be between 2-100 characters!") String firstName,
			@NotEmpty(message = "Please add a value to the Last Name field!") @Size(min = 2, max = 100, message = "Last Name must be between 2-100 characters!") String lastName,
			@Min(18) @Max(100) @Null(message = "Enter an age between 18 and 100.") Integer age) {

		this.id = id; // why not adding .id here?
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	
	// getters & setters
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	
	
	
	
	
	
}
