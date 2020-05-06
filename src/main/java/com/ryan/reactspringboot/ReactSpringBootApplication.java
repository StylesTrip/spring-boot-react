package com.ryan.reactspringboot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

import com.ryan.reactspringboot.domain.Car;
import com.ryan.reactspringboot.domain.Owner;
import com.ryan.reactspringboot.domain.CarRepository;
import com.ryan.reactspringboot.domain.OwnerRepository;

@SpringBootApplication
public class ReactSpringBootApplication {

  @Autowired
  private CarRepository repository;
  @Autowired
  private OwnerRepository ownerRepository;
  private static final Logger logger = LoggerFactory.getLogger(ReactSpringBootApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ReactSpringBootApplication.class, args);
		logger.info("Hello Spring Boot");
	}

  @Bean
  CommandLineRunner runner() {
    return args -> {
      Owner owner1 = new Owner("John", "Johnson");
      Owner owner2 = new Owner("Mary", "Robinson");

      ownerRepository.save(owner1);
      ownerRepository.save(owner2);

      // Save demo data to h2database
      repository.save(
        new Car("Ford", "Mustang", "Red", "ADF-1121", 2017, 59000, owner1));
      repository.save(
        new Car("Nissan", "Leaf", "White", "SSJ-3002", 2014, 29000, owner2));
      repository.save(
        new Car("Toyota", "Prius", "Silver", "KKO-0212", 2018, 39000, owner2));
    };
  }

}
