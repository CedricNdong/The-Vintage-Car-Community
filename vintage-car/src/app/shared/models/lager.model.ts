import { Einrichtung } from "./einrichtung.model"
import { LagerService } from "./ware.model"

export interface Lager extends Einrichtung {
    halterId: string,
    konditionen: Kondition[],
    services?: LagerService[],
    einlagerungsbetrag: number,
    servicezeiten?: Servicezeiten[],
    kapazitaet: number,
    freiePlaetze: number
}

export enum Kondition {
    Beheizt = 'Beheizt',
    UvGeschuetzt = 'UV-Geschützt',
    Klimatisiert = 'Klimatisiert',
    ImmerZugaenglich = '24/7 Geöffnet',
    Wachschutz = 'Wachschutz'
}

export interface Servicezeiten {
    von: Date,
    bis: Date
}


export interface Stellplatz {
    istVerfuegbar: boolean,
    massen: number[]
}