package com.bmw.booksDemo.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min=2, max=300, message="Title Must be between 2-300 characters long.")
	private String title;
	
	@Min(value=25, message="Must be at least 25 pages long!")
	private Integer pages;
	
	@Size(max=45, message="Language cannot exceed 45 characters!")
	private String language;
	
	@NotEmpty(message="Please add a description!")
	private String description;
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
	
	
	// many to one relationship with Author
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="author_id")
	private Author author;
	
	
	
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

	

	// Constructors
	
	public Book() {}
	
	public Book(
			@NotNull @Size(min = 2, max = 300, message = "Title Must be between 2-300 characters long.") String title,
			@Min(value = 25, message = "Must be at least 25 pages long!") Integer pages,
			@Size(max = 45, message = "Language cannot exceed 45 characters!") String language,
			@NotEmpty(message = "Please add a description!") String description, Author author) {
		this.title = title;
		this.pages = pages;
		this.language = language;
		this.description = description;
		this.author = author;
	}

	
	//getters & setters
	
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getPages() {
		return pages;
	}

	public void setPages(Integer pages) {
		this.pages = pages;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
	

}
