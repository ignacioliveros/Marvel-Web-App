export interface Hero {
    id: number;
    name: string;
    description: string;
    image:Image
}

export interface Image {
    path: string;
    extension: string;
    size:string
}

export interface HerosViewModel{
    heros: Hero[];
    collectionSize: number;    
}
