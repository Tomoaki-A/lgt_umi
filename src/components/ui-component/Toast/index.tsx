"use client";
import * as RadixToast from "@radix-ui/react-toast";
import React from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * RSCでトースターの実装が難しく断念
 * @todo 要調査
 */
function Toast() {
  const [open, setOpen] = React.useState(false);
  return (
    <RadixToast.Provider swipeDirection="right" duration={2000}>
      <RadixToast.Root open={open} onOpenChange={setOpen}>
        <RadixToast.Description>コピーしました</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </RadixToast.Provider>
  );
}

export default Toast;
