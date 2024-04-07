import { useAtom } from "jotai";
import { isToastShownAtom, toastMessageAtom } from "src/data/store";

export const useFeedback = () => {
  const [isToastShown, setIsToastShown] = useAtom(isToastShownAtom);
  const [toastMessage, setToastMessage] = useAtom(toastMessageAtom);

  const handleShow = ({ message }: { message: string }) => {
    setToastMessage(message);
    setIsToastShown(true);

    setTimeout(() => {
      setIsToastShown(false);
      setToastMessage("");
    }, 2000);
  };

  const handleHide = () => {
    setIsToastShown(false);
    setToastMessage("");
  };

  return {
    isToastShown,
    toastMessage,
    handleShow,
    handleHide,
  };
};
