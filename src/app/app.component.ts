import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showComplete: boolean = false;

  private list = new TodoList("Bob", [
      new TodoItem("Go for run", true),
      new TodoItem("Get flowers"),
      new TodoItem("Collect tickets"),
    ]);

    get username(): string {
      return this.list.user;
    }

    get itemCount(): number {
      return this.items.length;
    }

    get items(): readonly TodoItem[] {
      return this.list.items.filter(item => this.showComplete || !item.complete);
    }

    addItem(newItem) {
      if (newItem != "") {
        this.list.addItem(newItem);
      }
    }
}
