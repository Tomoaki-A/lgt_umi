export type MicroCmsArrayResponse<T = undefined> = {
  contents: T;
  totalCount: number;
  offset: number;
  limit: number;
};
export type MicroCmsResponse<T = undefined> = T;
