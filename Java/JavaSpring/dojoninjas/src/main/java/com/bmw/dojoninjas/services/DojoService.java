package com.bmw.dojoninjas.services;

import org.springframework.stereotype.Service;

import com.bmw.dojoninjas.repositories.DojoRepo;

@Service
public class DojoService {

	private final DojoRepo dojoRepo;
	public DojoService(DojoRepo dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	
}
