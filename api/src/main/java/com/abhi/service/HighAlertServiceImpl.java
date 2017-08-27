package com.abhi.service;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;
import com.abhi.repository.AlertRepository;
import com.abhi.repository.HighAlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class HighAlertServiceImpl implements HighAlertService {

    @Autowired
    HighAlertRepository repository;

    @Transactional(readOnly = true)
    public List<HighAlerts> findAllHigh() {
        return repository.findAllHigh();
    }



}
