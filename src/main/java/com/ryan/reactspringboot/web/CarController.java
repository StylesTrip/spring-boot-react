package com.ryan.reactspringboot.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ryan.reactspringboot.domain.Car;
import com.ryan.reactspringboot.domain.CarRepository;

@RestController
public class CarController {
  @Autowired
  private CarRepository repository;

  @RequestMapping("/cars")
  public Iterable<Car> getCars() {
    return repository.findAll();
  }
}
