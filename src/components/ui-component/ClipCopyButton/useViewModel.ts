import { useState } from "react";

type Props = {
  text: string;
};

export const useViewModel = ({ text }: Props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const handleClickCopyableElement = () => {
    navigator.clipboard.writeText(text);
    setIsTooltipOpen(true);
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 750);
  };

  return {
    handleClickCopyableElement,
    isTooltipOpen,
  };
};
