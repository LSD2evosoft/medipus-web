import { Screening } from "./screening";

export interface PastScreening {
    id: string;
    name: string;
    date: Date;
    checkedIn: boolean;
    screening: Screening;
}
