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

  /**
   * @todo Tailwindでのスタイリングする（なぜか反映されなかった）
   */
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr));",
        gap: "0.5rem",
      }}
    >
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
