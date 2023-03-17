import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() removeUser = new EventEmitter();
  @Input() name = '';
  @Input() status = '';
  @Input() avatar = '';
}
