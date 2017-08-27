package com.abhi.service;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;

import java.util.List;

public interface HighAlertService {
    List<HighAlerts> findAllHigh();
}
