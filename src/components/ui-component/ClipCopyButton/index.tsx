"use client";
import Tooltip from "../Tooltip";
import { useViewModel } from "./useViewModel";

type Props = {
  text: string;
  children: React.ReactNode;
};

function ClipCopyButton({ text, children }: Props) {
  const { handleClickCopyableElement, isTooltipOpen } = useViewModel({ text });
  return (
    <div onClick={handleClickCopyableElement}>
      <Tooltip isOpen={isTooltipOpen}>{children}</Tooltip>
    </div>
  );
}

export default ClipCopyButton;
