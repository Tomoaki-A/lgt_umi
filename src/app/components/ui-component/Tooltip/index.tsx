"use client";
import * as RadixTooltip from "@radix-ui/react-tooltip";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

function Tooltip({ children, isOpen }: Props) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0} open={isOpen}>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className=" bg-gray-900 opacity-80 p-2 rounded"
            sideOffset={-100}
            side="top"
          >
            Copied
            <RadixTooltip.Arrow className="fill-gray-900 opacity-80" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default Tooltip;
