import { ScreeningLocation } from "./screeningLocation";

export interface Screening {
    id: string;
    name: string;
    screeningInfo: string;
    locations?: ScreeningLocation[];
}
