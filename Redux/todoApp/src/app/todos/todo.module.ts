import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';




@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoFooterComponent,
  ],
  exports:[
  TodoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ]
})
export class TodoModule { }
