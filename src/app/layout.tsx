import { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import Toast from "./components/ui-component/Toast";

export const metadata: Metadata = {
  title: "LGT-Umi🐾 うみがLGTMと言っています。",
  description: "うみちゃん画像でLGTMを送ろう！",
  keywords: "うみ, LGTM, うみちゃん, うみちゃん画像",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://lgtm-umi.vercel.app/",
    siteName: "LGT-Umi🐾 うみがLGTMと言っています。",
    title: "LGT-Umi🐾 うみがLGTMと言っています。",
    description: "うみちゃん画像でLGTMを送ろう！",
  },
};

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
        <Toast />
        <div className={clsx(["w-[calc(100%_-_40px)]", "max-w-4xl"])}>
          {children}
        </div>
      </body>
    </html>
  );
}
