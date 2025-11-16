export interface Roll {
    result: number;
    rolls: string;
}
export declare abstract class Die {
    abstract roll(): Roll;
    static from(notation: string): Die;
}
