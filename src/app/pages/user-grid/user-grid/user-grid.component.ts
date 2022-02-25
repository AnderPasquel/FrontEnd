import { Component, OnInit } from '@angular/core';
import { UserGridService } from 'src/app/service/user-grid.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'password', 'sex', 'status'];
  constructor(public userGridService: UserGridService) { }


  ngOnInit(): void {
    this.userGridService.getUsers()
  }

}
