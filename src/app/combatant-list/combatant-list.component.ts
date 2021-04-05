import { Component, Input, OnInit } from '@angular/core';
import { Combat } from 'src/model/combat.model';
import { Combatant } from 'src/model/combatant.model';

@Component({
  selector: 'app-combatant-list',
  templateUrl: './combatant-list.component.html',
  styleUrls: ['./combatant-list.component.css']
})
export class CombatantListComponent implements OnInit {
  @Input() combat: Combat

  name: string = ""
  speed: number = 1
  dex: number = 11
  ego: number = 11

  constructor() { }

  ngOnInit(): void {
  }

  addCombatant() {
    if (this.name) {
      this.combat.AddCombatant(new Combatant(
        this.name,
        this.speed,
        this.dex,
        this.ego
      ))
    }
  }

}
