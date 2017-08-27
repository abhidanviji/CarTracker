package com.abhi.repository;

import com.abhi.entity.Reading;

import java.util.List;

public interface ReadingRepository {
    List<Reading> findAll();

    List<Reading> findByVin(String vin);

    List<Reading> findOneMap(String vin);

    Reading create(Reading emp);

    Reading update(Reading emp);
}
