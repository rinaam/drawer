import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  exportAs: 'drawer',
})
export class DrawerComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter();

  constructor() {}

  close() {
    this.isOpenChange.emit();
  }

  ngOnInit(): void {}
}
