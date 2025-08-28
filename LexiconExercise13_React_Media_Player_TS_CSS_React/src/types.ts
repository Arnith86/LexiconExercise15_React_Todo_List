export interface ITodo {
  uuid: string;
  title: string;
  content: string;
  author: string;
  completed: boolean;
  timeStamp: Date;
}

export type TodoAction =
  | "edit"
  | "delete"
  | "up"
  | "down"
  | "completed"
  | "save"
  | "cancel";
