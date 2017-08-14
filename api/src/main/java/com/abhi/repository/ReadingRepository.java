package com.abhi.repository;

import com.abhi.entity.Reading;

import java.util.List;

public interface ReadingRepository {
    List<Reading> findAll();

    Reading findByVin(String vin);

    Reading create(Reading emp);

    Reading update(Reading emp);
}
