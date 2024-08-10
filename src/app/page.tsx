import Navigationbutton from "@/components/navigation-button";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Hello Nextjs!</h1>
      <ul>
        <li>
          <Link href={`/about`}>Navigate to about page</Link>
        </li>
        <li>
          <Link href={`/account`}>Navigate to account page</Link>
        </li>
        <li>
          <Link href={`/account/membership`}>Navigate to membership page</Link>
        </li>
      </ul>
      <Navigationbutton />
    </div>
  );
}
export default Home;
