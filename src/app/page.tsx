import clsx from "clsx";
import Profile from "src/app/components/entity/Profile";
import Divider from "src/app/components/ui-component/Divider";
import { Suspense } from "react";
import LgtmImageList from "./components/entity/LgtmImageList";
import LgtmImageListLoading from "./components/entity/LgtmImageList/Loading";

export default function Home() {
  return (
    <main className={clsx("flex", "flex-col", "gap-4")}>
      <Profile />
      <Divider />
      <Suspense fallback={<LgtmImageListLoading />}>
        <LgtmImageList />
      </Suspense>
    </main>
  );
}
