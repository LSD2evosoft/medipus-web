import { Screening } from "./screening";

export interface Disease {
    id: string;
    name: string;
    screenings: Screening[];
}