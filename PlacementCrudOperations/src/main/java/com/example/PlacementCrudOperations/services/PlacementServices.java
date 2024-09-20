package com.example.PlacementCrudOperations.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.PlacementCrudOperations.entity.Placement;
import com.example.PlacementCrudOperations.repository.PlacementRepo;


@Service
public class PlacementServices {
	
	//Link the repository with services
	@Autowired
	PlacementRepo repo;
	
	// creating services
	// 1.Add placement details
	
	public Placement addDetails(Placement plc) {
		return repo.save(plc);
	}
	
	// 2. Get the details
	
	public List<Placement> getDetails() {
		return repo.findAll();
	}
	
	// 3. Delete the details
	
	public void deleteDetails(Integer id) {
		repo.deleteById(id);
	}
	
	// 4. update the details
	
	public Placement updateDetails(Placement plc) {
		long plcId = plc.getId();
		Placement plc1 = repo.findById( (int)plcId).get();
		plc1.setName(plc.getName());
		plc1.setCollege(plc.getCollege());
		plc1.setQualification(plc.getQualification());
		plc1.setYear(plc.getYear());
		return repo.save(plc);
		
	}
	
}
