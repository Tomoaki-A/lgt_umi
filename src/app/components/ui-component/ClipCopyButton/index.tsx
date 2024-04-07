"use client";
import { useViewModel } from "./useViewModel";

type Props = {
  text: string;
  children: React.ReactNode;
};

function ClipCopyButton({ text, children }: Props) {
  const { handleClickCopyableElement } = useViewModel({ text });

  return (
    <div className="cursor-pointer" onClick={handleClickCopyableElement}>
      {children}
    </div>
  );
}

export default ClipCopyButton;
