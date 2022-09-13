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
    Cabriolet = 'Cabriolet',
    Kleinstwagen = 'Kleinstwagen',
    Kleinwagen = 'Kleinwagen',
    Kompaktklasse = 'Kompaktklasse',
    Mittelklasse = 'Mittelklasse',
    ObereMittelklasse = 'ObereMittelklasse',
    Luxus = 'Luxus',
    Suv = 'SUV',
    Van = 'Van',
}

export enum Fahrzeugmarke {
    Porsche = 'Porsche',
    Bugatti = 'Bugatti',
    Volkswagen = 'Volkswagen',
    MercedesBenz = 'MercedesBenz',
    BMW = 'BMW',
    Audi = 'Audi',
    Opel = 'Opel',
    Skoda = 'Skoda',
    Ford = 'Ford',
}