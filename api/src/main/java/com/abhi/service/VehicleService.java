package com.abhi.service;

import com.abhi.entity.Vehicles;

import java.util.List;

public interface VehicleService {
    List<Vehicles> findAll();
    Vehicles findOne(String vin);
    Vehicles update(List<Vehicles> v);
}
