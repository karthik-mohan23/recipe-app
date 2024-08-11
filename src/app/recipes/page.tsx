import RecipeList from "@/components/recipeList";
import { Recipe, RecipeResponse } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";

const fetchAllRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) {
      throw new Error("Error fetching recipes");
    }
    const data: RecipeResponse = await response.json();
    const recipes: Recipe[] = data.recipes;
    return recipes;
  } catch (error) {
    console.log(error);
  }
};

async function AllRecipes() {
  const recipes = await fetchAllRecipes();

  return (
    <main>
      <h1 className="text-4xl font-bold text-center pt-10 underline italic">
        All Recipes
      </h1>
      <Suspense fallback={<Loading />}>
        <section>{recipes && <RecipeList recipes={recipes} />}</section>
      </Suspense>
    </main>
  );
}
export default AllRecipes;
