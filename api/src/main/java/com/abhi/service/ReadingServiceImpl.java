package com.abhi.service;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.Reading;
import com.abhi.entity.Vehicles;
import com.abhi.exception.ResourceNotFoundException;
import com.abhi.repository.AlertRepository;
import com.abhi.repository.ReadingRepository;
import com.abhi.repository.VehicleRepository;
import com.abhi.rules.CoolantEngineRule;
import com.abhi.rules.FuelVolumeRule;
import com.abhi.rules.RedLineRpmRule;
import com.abhi.rules.TirePressureRule;
import org.easyrules.api.RulesEngine;
import org.easyrules.core.RulesEngineBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.easyrules.core.RulesEngineBuilder.aNewRulesEngine;

@Service
public class ReadingServiceImpl implements ReadingService{

    @Autowired
    ReadingRepository repository;

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    AlertRepository alertRepository;

    @Transactional(readOnly = true)
    public List<Reading> findAll() {
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public Reading findOne(String vin) {
        Reading existing =  repository.findByVin(vin);
        if(existing == null){
            throw new ResourceNotFoundException("Vehicle with VIN "+vin+" does not exist");
        }
        return existing;
    }

    @Transactional
    public void insert(String vin){
        AlertRecord alertRecord = new AlertRecord();
        alertRecord.setVin(vin);
        alertRecord.setType("Greater Engine RPM");
        alertRecord.setPriority("HIGH");
        alertRepository.create(alertRecord);
    }

    @Transactional
    public Reading create(Reading r) {

        //Rules for Alerts Triggering point
        Vehicles vehicles = vehicleRepository.findByVin(r.getVin());

        RedLineRpmRule redLineRpmRule = new RedLineRpmRule();
        FuelVolumeRule fuelVolumeRule = new FuelVolumeRule();
        TirePressureRule tirePressureRule = new TirePressureRule();
        CoolantEngineRule coolantEngineRule = new CoolantEngineRule();
        RulesEngine rulesEngine = aNewRulesEngine()
                .withSkipOnFirstAppliedRule(true)
                .withSilentMode(true)
                .build();

        rulesEngine.registerRule(redLineRpmRule);
        rulesEngine.registerRule(fuelVolumeRule);
        rulesEngine.registerRule(tirePressureRule);
        rulesEngine.registerRule(coolantEngineRule);

        redLineRpmRule.setInput(r.getEngineRpm(),vehicles.getRedlineRpm());
        fuelVolumeRule.setInput(r.getFuelvolume(),vehicles.getMaxFuelVolume());
        tirePressureRule.setInput(r.getTires().getFrontLeft(),r.getTires().getFrontRight(),r.getTires().getRearLeft(),r.getTires().getRearRight());
        coolantEngineRule.setInput(r.isEngineCoolantLow(),r.isCheckEngineLightOn());

        rulesEngine.fireRules();
        System.out.println(redLineRpmRule.isPassOrFail());

        if(redLineRpmRule.isPassOrFail()){
            AlertRecord alertRecord = new AlertRecord();
            alertRecord.setVin(r.getVin());
            alertRecord.setType("Greater Engine RPM");
            alertRecord.setPriority("HIGH");
            alertRepository.create(alertRecord);
        }
         if(fuelVolumeRule.isPassOrFail()){
            System.out.println("Lesser Fuel Volume");
             AlertRecord alertRecord = new AlertRecord();
             alertRecord.setVin(r.getVin());
             alertRecord.setType("Lesser Fuel Volume");
             alertRecord.setPriority("MEDIUM");
             alertRepository.create(alertRecord);
        }
        if(tirePressureRule.isPassOrFail()){
            System.out.println("Tire Pressure not 32");
            AlertRecord alertRecord = new AlertRecord();
            alertRecord.setVin(r.getVin());
            alertRecord.setType("Tire Pressure not 32");
            alertRecord.setPriority("LOW");
            alertRepository.create(alertRecord);
        }
        if(coolantEngineRule.isPassOrFail()){
            System.out.println("Engine Coolant Low - "+r.isEngineCoolantLow()+" & Check Engine Light On - "+r.isCheckEngineLightOn());
            AlertRecord alertRecord = new AlertRecord();
            alertRecord.setVin(r.getVin());
            alertRecord.setType("Check Engine Coolant or Check Engine Light");
            alertRecord.setPriority("LOW");
            alertRepository.create(alertRecord);
        }
        Reading existing =  repository.findByVin(r.getVin());
        if(existing != null){
            return repository.update(r);
        }
        return repository.create(r);
    }
}

