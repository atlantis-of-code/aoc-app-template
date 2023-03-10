import { Component, OnInit } from '@angular/core';
import { AocUiPanelModule } from '@atlantis-of-code/aoc-client/ui/panel/aoc-ui-panel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    AocUiPanelModule
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
