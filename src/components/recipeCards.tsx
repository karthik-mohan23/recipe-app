import { Recipe } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type RecipeCardsProps = {
  recipe: Recipe;
};

function RecipeCards({ recipe }: RecipeCardsProps) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="hover:scale-105 active:scale-[1.02] transition">
      <div className="min-w-72 max-w-80">
        <Image
          src={recipe.image}
          height={100}
          width={200}
          alt={`Photo of ${recipe.name}`}
          className="object-cover pb-3"
        />
        <h3 className="text-xxl font-medium">{recipe?.name}</h3>
      </div>
    </Link>
  );
}
export default RecipeCards;
