package com.bmw.booksDemo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.bmw.booksDemo.models.Author;
import com.bmw.booksDemo.models.Book;
import com.bmw.booksDemo.services.AuthorService;
import com.bmw.booksDemo.services.BookService;

@Controller
public class MainController {
	
	// add the services
	private final BookService bookServ;
	private final AuthorService authServ;
	
	public MainController(BookService bookServ, AuthorService authServ) {
		this.bookServ = bookServ;
		this.authServ = authServ;
	}
	
	@GetMapping("/")
	public String index(
			Model model
			) {
		
		// send forward all books for table
		model.addAttribute("allBooks", bookServ.getAllBooks());
		
		// send forward empty author model for create
		Author author = new Author();
		model.addAttribute("author", author);
		
		return "index.jsp";
	}
	
	@PostMapping("/newAuthor")
	public String newAuthor(@Valid @ModelAttribute("author") Author author, BindingResult result) {
		if(result.hasErrors() ) {
			return "index.jsp";
		}
		authServ.saveAuthor(author);
		return "redirect:/";
	}
	
	
	@GetMapping("/books/new")
	public String createBook(Model model) {
		
		//list of all authors to choose from
		List<Author> allAuthors = authServ.getAllAuthors();
		model.addAttribute("allAuthors", allAuthors);
		
		// empty book instance for the form
		Book book = new Book();
		model.addAttribute("book", book);
		
		return "newBook.jsp";
	}
	
	@PostMapping("/addBook")
	public String addBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
		if(result.hasErrors() ) {
			List<Author> allAuthors = authServ.getAllAuthors();
			model.addAttribute("allAuthors", allAuthors);
			
			return "newBook.jsp";
		}
		bookServ.saveBook(book);
		return "redirect:/";
	}
	
	@GetMapping("/books/{id}/edit")
	public String editBook(@PathVariable("id") Long bookId, Model model) {
		List<Author> allAuthors = authServ.getAllAuthors();
		model.addAttribute("allAuthors", allAuthors);
		
		// find the book that I want to edit based on ID
		Book book = bookServ.getOneBook(bookId);
		model.addAttribute("book", book);
		
		return "editBook.jsp";
	}
	
	@PutMapping("/updateBook/{id}")
	public String updateBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model, @PathVariable("id") Long bookId) {
		if(result.hasErrors()) {
			List<Author> allAuthors = authServ.getAllAuthors();
			model.addAttribute("allAuthors", allAuthors);
			return "editBook.jsp";
		}
		bookServ.saveBook(book);
		return "redirect:/";
	}

}
