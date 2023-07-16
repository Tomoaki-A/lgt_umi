import "./globals.css";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={clsx("bg-black", "text-white", ["flex", "justify-center"])}
      >
        <div className={clsx(["w-[calc(100%_-_40px)]", "max-w-5xl"])}>
          {children}
        </div>
      </body>
    </html>
  );
}
