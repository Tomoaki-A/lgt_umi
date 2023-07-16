export type MicroCmsResponse<T = undefined> = {
  contents: T;
  totalCount: number;
  offset: number;
  limit: number;
};
