package com.qima.summary.model;

import lombok.Data;

@Data
public class FactoryInspectionRecord {
    public String factoryId;
    public String orderId;
    public String userId;
    public String factoryName;
    public String product;

    public String factoryLocation;
    public String productTargetLocation;

    public String inspectionData;
    public String createDate;
    public String updateDate;
}
