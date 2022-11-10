/* eslint-disable prettier/prettier */
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipes implements PipeTransform {
    readonly alloweStatus = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ]

    transform(value: any) {
        value = value.toUpperCase()
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`Invalid status ${value}`);
        }
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.alloweStatus.indexOf(status);
        return index !== -1;
    }
}
