

export interface TimeTable {
    title: string;
    times: { time: string }[]; 
    days: { day: string }[];
    buttonText: string;
    link?: string;
}
