package com.bmw.booksDemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bmw.booksDemo.models.Author;
import com.bmw.booksDemo.repositories.AuthorRepo;

@Service
public class AuthorService {
	
	private final AuthorRepo authorRepo;
	public AuthorService(AuthorRepo authorRepo) {
		this.authorRepo = authorRepo;
	}
	
	public List<Author> getAllAuthors() {
		return authorRepo.findAll();
	}
	
	public Author saveAuthor(Author a) {
		return authorRepo.save(a);
	}
	
	public void deleteAuthor(Long id) {
		authorRepo.deleteById(id);
	}
	
	
	public Author getOneAuthor(Long id) {
		Optional<Author> optionalAuthor = authorRepo.findById(id);
		if(optionalAuthor.isPresent()) {
			return optionalAuthor.get();
		} else {
			return null;
		}
	}

}
