package com.bmw.booksDemo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bmw.booksDemo.models.Author;

@Repository
public interface AuthorRepo extends CrudRepository<Author, Long> {
	//get all Authors
	List<Author> findAll();
	
	//get one author based on ID
	Optional<Author> findById(Long id);
	
	// save author (used for update and create)
	// Author save(Author a);
	
	// delete Author based on Id
	void deleteById(Long id);

}
