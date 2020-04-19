package com.ryan.reactspringboot.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Owner {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private long ownerid;
  private String firstName, lastName;

  public Owner() {}

  public Owner(String firstName, String lastName) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public long getOwnerid() {
    return ownerid;
  }

  public void setOwnerid(long ownerid) {
    this.ownerid = ownerid;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
}
