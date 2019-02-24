import { Component, OnInit } from '@angular/core';
import { UtilService } from "../util.service";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  constructor(
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.utilService.initLeftSiderStatus('user', 'create', AppComponent.self.openMap, AppComponent.self.selectMap);
  }
}
