import { Component, OnInit } from '@angular/core';
import { AocUiPanelComponent } from '@atlantis-of-code/aoc-client/ui/panel/aoc-ui-panel';

@Component({
  imports: [AocUiPanelComponent],
  selector: 'app-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
