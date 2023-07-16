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
      <div
        className={clsx("flex")}
        style={{
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "fit-content",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
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
