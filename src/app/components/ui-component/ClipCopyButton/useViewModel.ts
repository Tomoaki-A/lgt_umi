import { COPY_TO_CLIPBOARD_MESSAGE } from "src/domain/entity/feedback/constants";
import { useFeedback } from "src/domain/entity/feedback/hooks/useFeedback";

type Props = {
  text: string;
};

export const useViewModel = ({ text }: Props) => {
  const { handleShow } = useFeedback();
  const handleClickCopyableElement = () => {
    navigator.clipboard.writeText(text);
    handleShow({ message: COPY_TO_CLIPBOARD_MESSAGE });
  };

  return {
    handleClickCopyableElement,
  };
};
