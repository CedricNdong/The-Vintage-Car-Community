export interface Fahrzeug {
    id: string,
    userId: string,
    kategorie: FahrzeugKategorie,
    marke: Fahrzeugmarke,
    modell: string,
    istFahrbereit: boolean,
    istInWartung: boolean,
    anmerkung: string,
}


export enum FahrzeugKategorie {
    Cabriolet,
    Kleinstwagen,
    Kleinwagen,
    Kompaktklasse,
    Mittelklasse,
    ObereMittelklasse,
    Luxus,
    Suv,
    Van,
}

export enum Fahrzeugmarke {
    Porsche,
    Bugatti,
    Volkswagen,
    MercedesBenz,
    BMW,
    Audi,
    Opel,
    Skoda,
    Ford,
}