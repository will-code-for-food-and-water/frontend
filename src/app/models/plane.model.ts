export class Plane {
    constructor(
        public id: number,
        public number: string,
        public name: string,
        public position: string,
        public neededAuthorization: neededAuthorizationEnum
    ) { }
}

export enum neededAuthorizationEnum {
    PPLA = 'PPL-A',
    PPLB = 'PPL-B',
    BZFI = 'BZF-I',
    BZFII = 'BZF-II',
}

export namespace neededAuthorizationEnum {
    export function getEnumString(enteredString: string): string {
        switch (enteredString) {
            case neededAuthorizationEnum.PPLA: return 'PPL-A';
            case neededAuthorizationEnum.PPLB: return 'PPL-B';
            case neededAuthorizationEnum.BZFI: return 'BZF-I';
            case neededAuthorizationEnum.BZFII: return 'BZF-II';

        }
    }
}
