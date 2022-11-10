import { TaskStatus } from '../task.model';

export class GeTaskFilterDto {
  status: TaskStatus;
  search: string;
}
