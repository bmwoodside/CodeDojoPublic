package com.bmw.dojoninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bmw.dojoninjas.models.Ninja;
import com.bmw.dojoninjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	
	private final NinjaRepo ninjaRepo;
	public NinjaService(NinjaRepo ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}
	
	public List<Ninja> getAllAuthors() {
		return ninjaRepo.findAll();
	}
	
	public Ninja saveNinja(Ninja a) {
		return ninjaRepo.save(a);
	}
	
	public Ninja getOneNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if(optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}

}
