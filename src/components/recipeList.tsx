import { Recipe } from "@/lib/types";
import RecipeCards from "./recipeCards";

type RecipeListProps = {
  recipes: Recipe[];
};

function RecipeList({ recipes }: RecipeListProps) {
  return (
    <section className="w-[90%] max-w-5xl mx-auto flex flex-wrap gap-16 justify-center py-10 items-center">
      {recipes.map((recipe) => (
        <RecipeCards key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
export default RecipeList;
