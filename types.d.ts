export type ImageType = 'niki';

export interface File {
  name: string;
  file: string;
}

export interface Sounds {
  message: string;
  image?: ImageType;
  files: File[];
}
