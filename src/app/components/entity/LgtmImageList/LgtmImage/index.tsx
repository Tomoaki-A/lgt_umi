import Image from "next/image";
import ClipCopyButton from "src/app/components/ui-component/ClipCopyButton";
import { LgtmImage } from "src/data/lgtm-image/model";
import { getMarkdownImageText } from "src/domain/entity/lgtm";
import {
  COPY_LGTM_PARAM,
  LGTM_IMAGE_CROP_HEIGHT,
  LGTM_IMAGE_CROP_WIDTH,
  LGTM_PARAM,
} from "src/domain/entity/lgtm/constants";

type Props = {
  imageSrc: LgtmImage["imageSrc"];
};

function LgtmImage({ imageSrc }: Props) {
  const src = `${imageSrc.url}${LGTM_PARAM}`;
  const copySrc = `${imageSrc.url}${COPY_LGTM_PARAM}`;
  const clipUrl = getMarkdownImageText(copySrc);
  return (
    <div>
      <ClipCopyButton text={clipUrl}>
        <div
          style={{
            maxWidth: LGTM_IMAGE_CROP_WIDTH / 2,
            maxHeight: LGTM_IMAGE_CROP_HEIGHT / 2,
          }}
        >
          <Image
            className="w-full"
            src={src}
            alt=""
            width={LGTM_IMAGE_CROP_WIDTH / 2}
            height={LGTM_IMAGE_CROP_HEIGHT / 2}
          />
        </div>
      </ClipCopyButton>
    </div>
  );
}

export default LgtmImage;
