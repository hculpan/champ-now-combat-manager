import { StorageService } from "src/app/service/storage.service";
import { Combatant } from "./combatant.model";

export class Combat {
    public Combatants = new Map()
    public ActivePhase: number = 1

    constructor(public storage: StorageService) {
    }

    get activeCombatants() {
        console.log("Calling GetCombatantsForActivePhase()")
        return this.GetCombatantsForPhase(this.ActivePhase)
    }

    get allCombatants() {
        let result: Combatant[] = []

        for (let v of this.Combatants.values()) {
            result.push(v)
        }

        result.sort( (j, k): number => {
            if (j.Name < k.Name) {
                return -1
            }
            return 1
        })

        return result
    }

    public NextPhase() {
        this.ActivePhase++
        if (this.ActivePhase > 6) {
            this.ActivePhase = 1
        }
        this.persistCombat()
    }

    public Reset() {
        this.ActivePhase = 1
        this.persistCombat()
    }

    public AddCombatant(combatant: Combatant) {
        if (!this.Combatants.has(combatant.Name)) {
            this.Combatants.set(combatant.Name, combatant)
            this.persistCombat()
        }
    }

    public RemoveCombatant(name: string) {
        this.Combatants.delete(name)
        this.persistCombat()
    }

    public GetCombatantsForPhase(phase: number) : Combatant[] {
        let result: Combatant[] = []

        for (let v of this.Combatants.values()) {
            if (v.IsInPhase(phase)) {
                result.push(v)
            }
        }

        result.sort( (i1, i2): number => {
            return i2.Dex - i1.Dex
        })

        return result
    }

    public GetCombatantsForActivePhase(): Combatant[] {
        return this.GetCombatantsForPhase(this.ActivePhase)
    }

    persistCombat() {
        this.storage.set('champ-now-combat-active-phase', this.ActivePhase)
        this.storage.set('champ-now-combat-combatants', JSON.stringify(this.allCombatants))
    }
}