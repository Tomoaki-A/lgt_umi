import clsx from "clsx";
import LgtmImageLoading from "../LgtmImage/Loading";
import ImageListLayout from "../ImageListLayout";

const LOADING_COUNT = 9;

const Loading = () => {
  return (
    <ImageListLayout>
      {[...Array(LOADING_COUNT)].map((_, index) => {
        return <LgtmImageLoading key={index} />;
      })}
    </ImageListLayout>
  );
};

export default Loading;
