import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { getProfile } from "src/data/profile";

/**
 * @todo Tailwindでのスタイリングする（なぜか反映されなかった）
 */
async function Profile() {
  const { data } = await getProfile();
  if (!data) return null;
  const { name, description, imageUrl } = data;
  const displayDescription = description.split("\n");

  return (
    <div>
      <div className={clsx("flex", "items-center")}>
        <div className={clsx("w-1/3", "flex", "justify-center")}>
          <div className={clsx("w-fit", "rounded-full", "overflow-hidden")}>
            <Image src={imageUrl.url} alt="" width={150} height={150} />
          </div>
        </div>
        <div>
          <div>{name}</div>
          <div>
            {displayDescription.map((description, index) => {
              return <div key={index}>{description}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
