package com.bmw.dojoninjas.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bmw.dojoninjas.models.Dojo;

@Repository
public interface DojoRepo extends CrudRepository<Dojo, Long> {
	
	// get all Dojos
	List<Dojo> findAll();
	
	// get one dojo based on ID
	Optional<Dojo> findById(Long id);
	
	// save dojo
	
	// delete dojo by ID
	void deleteById(Long id);

}
