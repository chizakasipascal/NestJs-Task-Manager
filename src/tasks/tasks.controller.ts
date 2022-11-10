import { Body, Controller, Get, Post } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Post()
  creatTask(@Body() createTaskDto: createTaskDto): Task {
    const data = this.tasksService.createTask(createTaskDto);
    console.log('description', data);
    return data;
  }
}
