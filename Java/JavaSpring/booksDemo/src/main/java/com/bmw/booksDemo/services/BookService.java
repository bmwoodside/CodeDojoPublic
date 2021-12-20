package com.bmw.booksDemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bmw.booksDemo.models.Book;
import com.bmw.booksDemo.repositories.BookRepo;

@Service
public class BookService {
	
	private final BookRepo bookRepo;
	public BookService(BookRepo bookRepo) {
		this.bookRepo = bookRepo;
	}
	
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}
	
	public Book getOneBook(Long id) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		return optionalBook.isPresent() ? optionalBook.get() : null;
	}
	
	public Book saveBook(Book b) {
		return bookRepo.save(b);
	}
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}

}
