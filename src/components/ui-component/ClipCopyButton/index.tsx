"use client";
import { useViewModel } from "./useViewModel";

type Props = {
  text: string;
  children: React.ReactNode;
};

function ClipCopyButton({ text, children }: Props) {
  const { handleClickCopyableElement } = useViewModel({ text });
  return (
    <button type="button" onClick={handleClickCopyableElement}>
      {children}
    </button>
  );
}

export default ClipCopyButton;
