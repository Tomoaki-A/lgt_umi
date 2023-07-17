import Image from "next/image";
import { LgtmImage } from "src/data/lgtm-image/model";
import {
  LGTM_IMAGE_CROP_HEIGHT,
  LGTM_IMAGE_CROP_WIDTH,
  LGTM_PARAM,
} from "src/domain/entity/lgtm/constants";

type Props = {
  imageSrc: LgtmImage["imageSrc"];
};

function LgtmImage({ imageSrc }: Props) {
  return (
    <div>
      <Image
        src={`${imageSrc.url}${LGTM_PARAM}`}
        alt=""
        width={LGTM_IMAGE_CROP_WIDTH / 2}
        height={LGTM_IMAGE_CROP_HEIGHT / 2}
      />
    </div>
  );
}

export default LgtmImage;
