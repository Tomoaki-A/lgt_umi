export type Profile = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  description: string;
  imageUrl: {
    url: string;
    height: number;
    width: number;
  };
};
