package com.abhi.repository;

import com.abhi.entity.AlertRecord;
import com.abhi.entity.HighAlerts;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class AlertRepositoryImpl implements AlertRepository{

    @PersistenceContext
    private EntityManager entityManager;

    public List<HighAlerts> findAllHigh() {
        TypedQuery<HighAlerts> query = entityManager.createNamedQuery("Alerts.findHigh",
                HighAlerts.class);
        return query.getResultList();
    }

    public List<AlertRecord> findAll(String vin) {
        TypedQuery<AlertRecord> query = entityManager.createNamedQuery("Alerts.findAllByVin",
                AlertRecord.class);
        query.setParameter("paramVin", vin);
        return query.getResultList();
    }

    public void create(AlertRecord ar) {
        entityManager.persist(ar);
    }
}
