package com.ryan.reactspringboot;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import com.ryan.reactspringboot.web.CarController;;

@SpringBootTest
class ReactSpringBootApplicationTests {
	@Autowired
	private CarController controller;

	@Test
	void contextLoads() {
		Assertions.assertNotNull(controller);
	}

}
