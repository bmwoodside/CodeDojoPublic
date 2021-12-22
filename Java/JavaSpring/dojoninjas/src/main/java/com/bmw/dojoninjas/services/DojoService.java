package com.bmw.dojoninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bmw.dojoninjas.models.Dojo;
import com.bmw.dojoninjas.repositories.DojoRepo;

@Service
public class DojoService {

	private final DojoRepo dojoRepo;
	public DojoService(DojoRepo dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	
	public List<Dojo> getAllDojos() {
		return dojoRepo.findAll();
	}
	
	public Dojo saveDojo(Dojo a) {
		return dojoRepo.save(a);
	}
	
	public Dojo getOneDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if (optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}
}
