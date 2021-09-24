package com.qima.summary.model;

import lombok.Data;

@Data
public class Order {
    public String orderId;
    public String userId;
    public String createDate;
    public String updateDate;
}
