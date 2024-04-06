"use client";
import React from "react";
import useSWR from "swr";
import { getImageList } from "src/data/lgtm-image";
import LgtmImage from "./LgtmImage";
import { getShuffledList } from "src/domain/primitives/array";
import ImageListLayout from "./ImageListLayout";
import Loading from "./Loading";

function LgtmImageList() {
  const { data, isValidating } = useSWR("lgtm-images", () => getImageList(), {
    revalidateOnFocus: false,
  });

  if (isValidating) return <Loading />;

  const displayData = getShuffledList({
    itemList: data?.data || [],
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
