import { Screening } from "./screening";

export interface SuggestedScreening {
    id: string;
    screening: Screening;
    date: Date;
    bookedLocation: Location;
}