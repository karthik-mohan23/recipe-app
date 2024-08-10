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
          <Link href={`/`}>Navigate to home page</Link>
        </li>
        <li>
          <Link href={`/account/membership`}>Navigate to membership page</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
