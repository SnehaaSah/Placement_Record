package com.example.PlacementCrudOperations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PlacementCrudOperations.entity.Placement;

public interface PlacementRepo extends JpaRepository<Placement,Integer> {

}
