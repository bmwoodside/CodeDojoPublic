package com.bmw.booksDemo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bmw.booksDemo.models.Book;

@Repository
public interface BookRepo extends CrudRepository<Book, Long> {

	//get all books
	List<Book> findAll();
	
	//get one book based on Id
	Optional<Book> findById(Long id);
	
	// save book
	// Book save(Book b);
	
	// delete book by Id
	void deleteById(Long id);
	
}
