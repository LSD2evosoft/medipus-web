import { Achievement } from "./achievement";
import { Disease } from "./disease";
import { PastScreening } from "./pastScreening";
import { Screening } from "./screening";
import { Sex } from './sex';
import { SuggestedScreening } from "./suggestedScreening";

export interface User {
    // Login related
    id: string;
    name: string;
    userName: string;
    email: string;
    facebookConnection?: any;
    googleConnection?: any;

    // Simple personal data
    dateOfBirth?: Date;
    sex?: Sex;
    weight?: number;
    height?: number;
    profilePictureUrl?: string;

    // Advanced personal data
    pastScreenings?: PastScreening[];
    watchedScreening?: Screening[];
    inheritedDiseases?: Disease[];

    // Calculated
    suggestedScreenings?: SuggestedScreening[];
    healthScore?: number;
    achievements?: Achievement[];

    // Other
    friendIDs?: string[];
}
