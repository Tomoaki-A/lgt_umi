import clsx from "clsx";
import React from "react";
import { getImageList } from "src/data/lgtm-image";
import LgtmImage from "./LgtmImage";

async function LgtmImageList() {
  const { data } = await getImageList();
  if (!data) return null;

  return (
    <div className={clsx("grid", "grid-cols-3", "gap-2")}>
      {data.map((image) => {
        const { id, imageSrc } = image;
        return <LgtmImage key={id} imageSrc={imageSrc} />;
      })}
    </div>
  );
}

export default LgtmImageList;
