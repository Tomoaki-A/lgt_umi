import LgtmImageLoading from "../LgtmImage/Loading";
import ImageListLayout from "../ImageListLayout";

const LOADING_COUNT = 12;

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
