package com.example.PlacementCrudOperations.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.PlacementCrudOperations.entity.Placement;
import com.example.PlacementCrudOperations.services.PlacementServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class PlacementControllers {

	//Link the service class in controllers
	@Autowired
	PlacementServices services;
	
	// Creating Https Requests
	
	//Post request by @PostMapping annotation
	@PostMapping("/addDetails")
	public Placement addDetails(@RequestBody Placement plc) {
		return services.addDetails(plc);
	}
	
	//Get request by
	@GetMapping("/getdetails")
	public List<Placement> getDetails() {
		return services.getDetails();
	}
	
	//Delete request
	@DeleteMapping("/deletedetails/{id}")
	public void deleteDetails(@PathVariable Integer id) {
		 services.deleteDetails(id);
	}
	
	//Update request
	@PutMapping("/updatedetails")
	public Placement updateDetails(@RequestBody Placement plc) {
		return services.updateDetails(plc);
	}
	
	
}
