import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  todo = "todos"; //the same as this.todo
  constructor(private navController: NavController) {
  }
}
