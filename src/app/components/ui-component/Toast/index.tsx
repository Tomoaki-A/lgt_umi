"use client";
import clsx from "clsx";
import React from "react";
import { useFeedback } from "src/domain/entity/feedback/hooks/useFeedback";

/**
 * RSCでトースターの実装が難しく断念
 * @todo 要調査
 */
function Toast() {
  const { isToastShown, handleHide, toastMessage } = useFeedback();

  if (isToastShown) {
    return (
      <div
        className={clsx(
          ["fixed", "bottom-3", "md:right-3"],
          "bg-black",
          "rounded-md",
          ["w-[80%]", "md:w-[35%]", "md:max-w-[400px]"]
        )}
      >
        <div
          className={clsx(
            ["p-2", "md:p-4"],
            ["border", "border-solid", "border-gray-600", "rounded-md"],
            ["flex", "justify-between", "items-center"],
            "min-w-[30%]"
          )}
        >
          <div>{toastMessage}</div>
          <div className={clsx("p-1")}>
            <button onClick={handleHide}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toast;
