package com.ryan.reactspringboot.domain;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.ryan.reactspringboot.domain.Car;
import com.ryan.reactspringboot.domain.Owner;
import com.ryan.reactspringboot.domain.CarRepository;
import com.ryan.reactspringboot.domain.OwnerRepository;

@DataJpaTest
public class CarRepositoryTest {
  @Autowired
  private TestEntityManager entityManager;

  @Autowired
  private CarRepository repository;
  @Autowired
  private OwnerRepository ownerRepository;

  @Test
  public void saveCar() {
    Owner owner = new Owner("Ryan", "T");
    entityManager.persistAndFlush(owner);

    Car car = new Car("Tesla", "Model X", "White", "ABC-1234",
        2017, 86000, owner);
    entityManager.persistAndFlush(car);

    Assertions.assertNotNull(car.getId());
  }

  @Test
  public void deleteCars() {
    Owner owner = new Owner("Ryan", "T");
    entityManager.persistAndFlush(owner);

    entityManager.persistAndFlush(new Car("Tesla", "Model X", "White",
        "ABC-1234", 2017, 86000, owner));

    entityManager.persistAndFlush(new Car("Mini", "Cooper", "Yellow",
        "BWS-3007", 2015, 24500, owner));

    repository.deleteAll();
    Assertions.assertEquals(0, repository.count());
  }
}
