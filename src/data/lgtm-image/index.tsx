import { microCmsClient } from "../microcms";
import { MicroCmsArrayResponse } from "../microcms/model";
import { DataResponse } from "../model";
import { LgtmImageList } from "./model";

export const getImageList = async (): Promise<DataResponse<LgtmImageList>> => {
  return microCmsClient
    .get<MicroCmsArrayResponse<LgtmImageList>>({
      endpoint: "lgtm-images",
      queries: { limit: 50 },
    })
    .then((res) => {
      return {
        data: res.contents,
      };
    });
};
