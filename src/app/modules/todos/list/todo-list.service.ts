import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils, DefaultResponse } from '../../../utils/http-utils';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TodoListService extends HttpUtils {

  constructor(http: HttpClient) {
    super(http, 'https://thawing-lake-90175.herokuapp.com');
  }

  getTodos(): Promise<DefaultResponse<Todo[]>> {
    return this.callGet('todos');
  }

  saveTodo(todo: Todo): Promise<DefaultResponse<Todo>> {
    return this.callPost('todos', todo);
  }

  deleteTodo(id): Promise<DefaultResponse<Todo>> {
    return this.callDelete(`todos/${id}`);
  }
}


@Injectable()
export class TodoListResolver implements Resolve<DefaultResponse<Todo[]>> {

  constructor(private service: TodoListService) {

  }

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<DefaultResponse<Todo[]>> {
    return new Promise(async (resolve, reject) =>{
      try {
        const response = await this.service.getTodos();
        if (!response) {
          throw response;
        }
        resolve(response);
      } catch(e) {
        reject(e);
      }
    })
  }
}

export interface TodoFilter {
  completed: boolean;
}

export interface Todo {
  text?: string;
  completed?: boolean;
  completedAt?: string;
  _creator?: string;
}