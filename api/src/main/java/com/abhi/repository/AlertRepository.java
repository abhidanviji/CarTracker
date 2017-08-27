package com.abhi.repository;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;

import java.util.List;

public interface AlertRepository{

    List<HighAlerts> findAllHigh();
    List<AlertRecord> findAll(String vin);
    void create(AlertRecord ar);
}
