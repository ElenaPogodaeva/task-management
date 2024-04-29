export enum StatusModel {
  open = 'Open',
  inProgress = 'In progress',
  completed = 'Completed',
  cancelled = 'Cancelled',
}

export enum PriorityModel {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
}

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: PriorityModel;
  status: StatusModel;
  assignee: string;
}
