package com.mz.todo;

import com.mz.todo.controllers.TaskController;
import com.mz.todo.entities.Task;
import com.mz.todo.services.TaskService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.assertEquals;
import static org.springframework.http.RequestEntity.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class TodoApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private TaskController taskController;

	@Test
	void contextLoads() {

	}

}
