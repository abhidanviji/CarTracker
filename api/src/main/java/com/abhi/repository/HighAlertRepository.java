package com.abhi.repository;

import com.abhi.entity.HighAlerts;

import java.util.List;

public interface HighAlertRepository {

    List<HighAlerts> findAllHigh();
    public HighAlerts findByVin(String vin);
    void create(HighAlerts ha);
    public HighAlerts update(HighAlerts ha);
}
