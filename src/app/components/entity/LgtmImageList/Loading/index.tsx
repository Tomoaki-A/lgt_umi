import clsx from "clsx";
import LgtmImageLoading from "../LgtmImage/Loading";

const LOADING_COUNT = 9;

const Loading = () => {
  return (
    <div className={clsx("grid", "grid-cols-3", "gap-2")}>
      {[...Array(LOADING_COUNT)].map((_, index) => {
        return <LgtmImageLoading key={index} />;
      })}
    </div>
  );
};

export default Loading;
