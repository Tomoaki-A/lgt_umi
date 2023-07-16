import { microCmsClient } from "../microcms";
import { MicroCmsResponse } from "../microcms/model";
import { DataResponse } from "../model";
import { Profile } from "./model";

export const getProfile = async (): Promise<DataResponse<Profile>> => {
  return microCmsClient
    .get<MicroCmsResponse<Profile>>({
      endpoint: "profile",
    })
    .then((res) => {
      return {
        data: res,
      };
    });
};
