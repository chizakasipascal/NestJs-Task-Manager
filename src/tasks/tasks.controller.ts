import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GeTaskFilterDto } from './dto/get-task-filter.dto';

import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GeTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      console.log('filter', filterDto);
      return this.tasksService.getTaskWithFilter(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  creatTask(@Body() createTaskDto: CreateTaskDto): Task {
    const data = this.tasksService.createTask(createTaskDto);
    console.log('data', data);
    return data;
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    const dataUpadate = this.tasksService.updateTaskStatus(id, status);
    console.log('updateTaskStatus', dataUpadate);
    return dataUpadate;
  }
}
