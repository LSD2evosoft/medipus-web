import { Achievement } from "./achievement";
import { Disease } from "./disease";
import { PastScreening } from "./pastScreening";
import { Screening } from "./screening";
import { Sex } from './sex';
import { SuggestedScreening } from "./suggestedScreening";

export interface User {
    id: string;
    name: string;
    userName: string;
    email: string;
    profilePicture: ImageBitmap;
    pastScreenings: PastScreening[];
    watchedScreening: Screening[];
    suggestedScreening: SuggestedScreening[];
    dateOfBirth: Date;
    sex: Sex;
    weight: number;
    height: number;
    friendIDs: string[];
    healthScore: number;
    achievements: Achievement[];
    inheritedDiseases: Disease[];
    facebookConnection: any;
    googleConnection: any;
}
