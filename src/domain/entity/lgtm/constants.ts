export const LGTM_IMAGE_CROP_WIDTH = 800;
export const LGTM_IMAGE_CROP_HEIGHT = 600;
const CLIP_SHRINKAGE_RATE = 0.5;
const LGTM_IMAGE_COPY_WIDTH = LGTM_IMAGE_CROP_WIDTH * CLIP_SHRINKAGE_RATE;
const LGTM_IMAGE_COPY_HEIGHT = LGTM_IMAGE_CROP_HEIGHT * CLIP_SHRINKAGE_RATE;
const LGTM_IMAGE_TEXT = "LGTM!";
const LGTM_IMAGE_TEXT_SIZE = 78;
const LGTM_IMAGE_COPY_TEXT_SIZE = LGTM_IMAGE_TEXT_SIZE * CLIP_SHRINKAGE_RATE;
const LGTM_IMAGE_TEXT_COLOR = "ffffff";
const LGTM_IMAGE_TEXT_STYLE = "fantasy,bold";

export const LGTM_PARAM = `?fit=crop&w=${LGTM_IMAGE_CROP_WIDTH}&h=${LGTM_IMAGE_CROP_HEIGHT}&txt=${LGTM_IMAGE_TEXT}&txt-size=${LGTM_IMAGE_TEXT_SIZE}&txt-color=${LGTM_IMAGE_TEXT_COLOR}&txt-align=middle,center&txt-font=${LGTM_IMAGE_TEXT_STYLE}`;
export const COPY_LGTM_PARAM = `?fit=crop&w=${LGTM_IMAGE_COPY_WIDTH}&h=${LGTM_IMAGE_COPY_HEIGHT}&txt=${LGTM_IMAGE_TEXT}&txt-size=${LGTM_IMAGE_COPY_TEXT_SIZE}&txt-color=${LGTM_IMAGE_TEXT_COLOR}&txt-align=middle,center&txt-font=${LGTM_IMAGE_TEXT_STYLE}`;
