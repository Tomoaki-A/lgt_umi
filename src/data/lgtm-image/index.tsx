import { microCmsClient } from "../microcms";
import { MicroCmsResponse } from "../microcms/model";
import { DataResponse } from "../model";
import { LgtmImageList } from "./model";

export const getImageList = async (): Promise<DataResponse<LgtmImageList>> => {
  return microCmsClient
    .get<MicroCmsResponse<LgtmImageList>>({
      endpoint: "lgtm-images",
    })
    .then((res) => {
      return {
        data: res.contents,
      };
    });
};
