import { Body, Controller, Get, Post } from '@nestjs/common';
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
  creatTask(@Body('title') title, @Body('description') description): Task {
    const data = this.tasksService.createTask(title, description);
    console.log('description', data);
    return data;
  }
}
