export class Combatant {

    constructor(
        public Name: string,
        public Speed: number,
        public Dex: number,
        public Ego: number
        ){}

    get phases(): number[] {
        return this.GetActingPhases()
    }    

    public GetActingPhases(): number[] {
        switch (this.Speed) {
            case 1:
                return [4]
            case 2:
                return [3, 5]
            case 3:
                return [2, 4, 6]
            case 4:
                return [1, 3, 5, 6]
            case 5:
                return [1, 2, 4, 5, 6]
            case 6:
                return [1, 2, 3, 4, 5, 6]
        }
        return []
    }

    public IsInPhase(phase: number): boolean {
        return this.GetActingPhases().includes(phase)
    }
}