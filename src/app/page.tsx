import clsx from "clsx";
import LgtmImageList from "src/components/entity/LgtmImageList";
import Profile from "src/components/entity/Profile";
import Divider from "src/components/ui-component/Divider";

export default function Home() {
  return (
    <main className={clsx("flex", "flex-col", "gap-4")}>
      <Profile />
      <Divider />
      <LgtmImageList />
    </main>
  );
}
