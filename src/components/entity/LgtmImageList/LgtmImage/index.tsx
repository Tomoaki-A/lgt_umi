import Image from "next/image";
import ClipCopyButton from "src/components/ui-component/ClipCopyButton";
import { LgtmImage } from "src/data/lgtm-image/model";
import { getMarkdownImageText } from "src/domain/entity/lgtm";
import {
  LGTM_IMAGE_CROP_HEIGHT,
  LGTM_IMAGE_CROP_WIDTH,
  LGTM_PARAM,
} from "src/domain/entity/lgtm/constants";

type Props = {
  imageSrc: LgtmImage["imageSrc"];
};

function LgtmImage({ imageSrc }: Props) {
  const src = `${imageSrc.url}${LGTM_PARAM}`;
  const clipUrl = getMarkdownImageText(src);
  return (
    <div>
      <ClipCopyButton text={clipUrl}>
        <Image
          src={src}
          alt=""
          width={LGTM_IMAGE_CROP_WIDTH / 2}
          height={LGTM_IMAGE_CROP_HEIGHT / 2}
        />
      </ClipCopyButton>
    </div>
  );
}

export default LgtmImage;
