import Member from "./member"; 

export default interface Dinner {
    members: Member[];
    shuffleMember: (array: Member[]) => Member[];
    getRandomMenu: (menuArray: string[]) => string;
    organize: (array: Member[]) => void;
}