type Props = {
  text: string;
};

export const useViewModel = ({ text }: Props) => {
  const handleClickCopyableElement = () => {
    navigator.clipboard.writeText(text);
    console.log("copied", text);
  };

  return {
    handleClickCopyableElement,
  };
};
