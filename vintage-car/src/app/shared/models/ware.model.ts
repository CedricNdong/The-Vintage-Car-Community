import { User } from "./user.model";

export interface Ware {
    id: number,
    name: string,
    beschreibung: string,
    kosten: number,
}

export interface LagerService extends Ware {
}