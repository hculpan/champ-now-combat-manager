import { Component } from '@angular/core';
import { Combat } from 'src/model/combat.model';
import { Combatant } from 'src/model/combatant.model';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Champions Now Combat Manager';

  combat: Combat

  constructor(public storage: StorageService) {
    this.combat = new Combat(storage)

    let phaseStr = storage.get('champ-now-combat-active-phase')
    let combatantsStr = storage.get('champ-now-combat-combatants')
    console.log("combat-data='" + phaseStr + "'")
    console.log("combatants-data='" + combatantsStr + "'")
    if (phaseStr) {
      this.combat.ActivePhase = +phaseStr
    }
    if (combatantsStr) {
      let combatants = JSON.parse(combatantsStr)
      combatants.forEach(element => {
        this.combat.Combatants.set(
          element.Name, 
          new Combatant(element.Name, element.Speed, element.Dex, element.Ego)
        )
      });
    }
  }
}
