package com.bmw.dojoninjas.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bmw.dojoninjas.models.Ninja;

@Repository
public interface NinjaRepo extends CrudRepository<Ninja, Long> {
	
	// get all ninjas
	List<Ninja> findAll();
	
	// get one ninja by ID
	Optional<Ninja> findById(Long id);
	
	// save ninja
	// Ninja save(Ninja a);
	
	// delete ninja by ID
	void deleteById(Long id);

}
