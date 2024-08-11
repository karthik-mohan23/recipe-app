import Link from "next/link";

function Header() {
  return (
    <header className="px-3 md:px-6 flex justify-between items-center h-16 border-b border-white/50">
      <Link href={`/`}>
        <h2 className="text-xl font-semibold">MyRecipe</h2>
      </Link>
      <nav>
        <ul className="text-base">
          <li>
            <Link href={`/recipes`}>All Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
