package com.ryan.reactspringboot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactSpringBootApplication {

  private static final Logger logger = LoggerFactory.getLogger(ReactSpringBootApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ReactSpringBootApplication.class, args);
		logger.info("Hello Spring Boot");
	}

}
