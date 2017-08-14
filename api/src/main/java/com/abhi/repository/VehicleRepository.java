package com.abhi.repository;

import com.abhi.entity.Vehicles;

import java.util.List;

public interface VehicleRepository {
    List<Vehicles> findAll();

    Vehicles findByVin(String vin);

    Vehicles create(Vehicles emp);

    Vehicles update(Vehicles emp);
}
