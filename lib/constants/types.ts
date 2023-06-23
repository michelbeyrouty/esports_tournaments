export interface Image {
    img: any;
    alt: string;
    available: boolean;
}

export interface Tournament {
    name: string;
    imageName: string;
    prizePool: string;
    entryFee: string;
    enrolledPlayers: number;
    capacity: number;
}
