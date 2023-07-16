export type LgtmImage = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  imageSrc: {
    url: string;
    height: number;
    width: number;
  };
};
export type LgtmImageList = Array<LgtmImage>;
