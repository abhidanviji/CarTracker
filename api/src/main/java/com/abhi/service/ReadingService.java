package com.abhi.service;

import com.abhi.entity.Reading;

import java.util.List;

public interface ReadingService {
    List<Reading> findAll();
    List<Reading> findOne(String vin);
    List<Reading> findOneMap(String vin);
    Reading create(Reading r);
}
