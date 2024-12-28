export interface CatImage {
  url: string;
  id: string;
}

export interface Cat extends CatImage {
  score: number;
}

export interface Results {
  images: CatImage[];
}
