import {
  IAction,
} from '../Interfaces';
import {
  Record,
} from 'immutable';

export default {};

export enum DefaultActionTypes {
  ADD_USER = 'ADD_USER',
  DELETE_USER = 'DELETE_USER',
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  ADD_SUB_TODO = 'ADD_SUB_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  COMPLETE_SUBTODO = 'COMPLETE_SUBTODO',
  SELECT_TODO = 'SELECT_TODO',
}

export interface IUser {
  id: number;
  name: string;
}

export const UserFactory = Record<IUser>({
  id: -1,
  name: '',
});

export interface ITodo {
  id:  number;
  userId: number;
  title: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  complete: boolean;
}

export const TodoFactory = Record<ITodo>({
  id: -1,
  userId: -1,
  title: 'untitled',
  complete: false,
  value1: '',
  value2: '',
  value3: '',
  value4: '',
});

export interface ISubTodo {
  id:  number;
  todoId:  number;
  title: string;
  complete: boolean;
}

export const SubTodoFactory = Record<ISubTodo>({
  id: -1,
  todoId: -1,
  title: 'untitled',
  complete: false,
});

export class AddUserAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_USER;
  constructor(
    public payload: {
      user: Record<IUser>,
    }
  ) {}
}

export class DeleteUserAction implements IAction {
  public readonly type = DefaultActionTypes.DELETE_USER;
  constructor(
    public payload: {
      userId: number,
    }
  ) {}
}


export class AddTodoAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_TODO;
  constructor(
    public payload: {
      userId: number,
      todo: Record<ITodo>,
    }
  ) {}
}

export class EditTodoAction implements IAction {
  public readonly type = DefaultActionTypes.EDIT_TODO;
  constructor(
    public payload: {
      todoId: number,
      todo: Record<ITodo>,
    }
  ) {}
}


export class CompletedTodoAction implements IAction {
  public readonly type = DefaultActionTypes.COMPLETE_TODO;
  constructor(
    public payload: {
      todo: Record<ITodo>,
      complete: boolean
    }
  ) {}
}

export class CompleteSubTodoAction implements IAction {
  public readonly type = DefaultActionTypes.COMPLETE_SUBTODO;
  constructor(
    public payload: {
      subtodo: Record<ISubTodo>,
      complete: boolean
    }
  ) {}
}


export class DeleteTodoAction implements IAction {
  public readonly type = DefaultActionTypes.DELETE_TODO;
  constructor(
    public payload: {
      todo: Record<ITodo>,
    }
  ) {}
}

export class AddSubTodoAction implements IAction {
  public readonly type = DefaultActionTypes.ADD_SUB_TODO;
  constructor(
    public payload: {
      todoId: number,
      subTodo: Record<ISubTodo>,
    }
  ) {}
}

export class SelectTodoAction implements IAction {
  public readonly type = DefaultActionTypes.SELECT_TODO;
  constructor(
    public payload: {
      todoId: number,
    }
  ) {}
}