import { Component, Input, OnInit } from '@angular/core';
import { Combat } from 'src/model/combat.model';

@Component({
  selector: 'app-phase-display',
  templateUrl: './phase-display.component.html',
  styleUrls: ['./phase-display.component.css']
})
export class PhaseDisplayComponent implements OnInit {
  @Input() combat: Combat

  constructor() { }

  ngOnInit(): void {
  }

}
