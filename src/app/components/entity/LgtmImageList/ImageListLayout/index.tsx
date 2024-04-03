import clsx from "clsx";

const ImageListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx("grid", "grid-cols-2", "md:grid-cols-3", "gap-2")}>
      {children}
    </div>
  );
};

export default ImageListLayout;
