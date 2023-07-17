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
        className={clsx(
          ["bg-black", "text-white"],
          ["flex", "justify-center"],
          "py-4"
        )}
      >
        <div className={clsx(["w-[calc(100%_-_40px)]", "max-w-4xl"])}>
          {children}
        </div>
      </body>
    </html>
  );
}
