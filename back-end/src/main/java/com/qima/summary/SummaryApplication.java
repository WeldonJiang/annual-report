package com.qima.summary;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.UUID;

@SpringBootApplication
@Slf4j
public class SummaryApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SummaryApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        log.info("Start Collecting summary report");
        while (!Thread.currentThread().isInterrupted()) {
            String userId = UUID.randomUUID().toString();
            log.info("Collecting report for user: " + userId);
            Thread.sleep(1000);
            log.info("Sending summary report to user: " + userId);
            Thread.sleep(3000);
        }
    }
}
