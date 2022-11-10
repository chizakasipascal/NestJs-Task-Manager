/* eslint-disable prettier/prettier */
import { IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GeTaskFilterDto {
    @IsOptional()
    status: TaskStatus;
    @IsOptional()
    search: string;
}
