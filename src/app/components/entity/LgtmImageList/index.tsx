import clsx from "clsx";
import React from "react";
import { getImageList } from "src/data/lgtm-image";
import LgtmImage from "./LgtmImage";
import { getShuffledList } from "src/domain/primitives/array";
import ImageListLayout from "./ImageListLayout";

async function LgtmImageList() {
  const { data } = await getImageList();
  if (!data) return null;

  const displayData = getShuffledList({
    itemList: data,
  });

  return (
    <ImageListLayout>
      {displayData.map((image) => {
        const { id, imageSrc } = image;
        return <LgtmImage key={id} imageSrc={imageSrc} />;
      })}
    </ImageListLayout>
  );
}

export default LgtmImageList;
