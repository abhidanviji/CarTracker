package com.abhi.service;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;
import com.abhi.exception.ResourceNotFoundException;
import com.abhi.repository.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AlertServiceImpl implements AlertService {

    @Autowired
    AlertRepository repository;

    @Transactional(readOnly = true)
    public List<HighAlerts> findAllHigh() {
        return repository.findAllHigh();
    }

    @Transactional(readOnly = true)
    public List<AlertRecord> findAll(String vin) {
        return repository.findAll(vin);
    }



}
