import axios, { AxiosResponse } from 'axios'

export interface Characters {
    info:    Info;
    results: Character[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null | string;
}

export interface Character {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}


export const characters = async (next? : string) : Promise<Characters | undefined> => {

try {

    console.log(next)

    const url = next ? next :  'https://rickandmortyapi.com/api/character'

    const response = await axios.get<Characters>( url )
     
    return response.data
    
} catch (error) {

    console.log(error)
}

}