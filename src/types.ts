export interface ScopeMount {
    azimuth: number;
    altitude: number;
    rightAscension: number;
    declination: number;
    sideOfPierEast: boolean;
    sideOfPierWest: boolean;
}

export interface ScopeData {
    mount: ScopeMount;
}
