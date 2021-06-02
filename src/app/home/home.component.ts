import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDrawerOpen: boolean = false;

  constructor() {}

  openDrawer() {
    this.isDrawerOpen = true;
  }

  ngOnInit(): void {}
}
