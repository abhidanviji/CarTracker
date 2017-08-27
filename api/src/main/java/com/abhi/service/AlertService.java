package com.abhi.service;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;

import java.util.List;

public interface AlertService {
    List<HighAlerts> findAllHigh();
    List<AlertRecord> findAll(String vin);
}
