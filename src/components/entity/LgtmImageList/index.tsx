import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { getImageList } from "src/data/lgtm-image";
import {
  LGTM_IMAGE_CROP_HEIGHT,
  LGTM_IMAGE_CROP_WIDTH,
  LGTM_PARAM,
} from "src/domain/entity/lgtm/constants";

async function LgtmImageList() {
  const { data } = await getImageList();
  if (!data) return null;

  return (
    <div className={clsx("grid", "grid-cols-3", "gap-2")}>
      {data.map((image) => {
        const { id, imageSrc } = image;
        return (
          <div key={id}>
            <Image
              src={`${imageSrc.url}${LGTM_PARAM}`}
              alt=""
              width={LGTM_IMAGE_CROP_WIDTH / 2}
              height={LGTM_IMAGE_CROP_HEIGHT / 2}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LgtmImageList;
