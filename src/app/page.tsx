import Profile from "src/component/entity/Profile";
import LgtmImageList from "../component/entity/LgtmImageList";
import clsx from "clsx";
import Divider from "src/component/ui-component/Divider";

export default function Home() {
  return (
    <main className={clsx("flex", "flex-col", "gap-4")}>
      <Profile />
      <Divider />
      <LgtmImageList />
    </main>
  );
}
