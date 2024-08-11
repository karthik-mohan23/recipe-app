import { Recipe } from "@/lib/types";

type RecipeDetailsProps = {
  params: { id: string };
};

const fetchSingleRecipe = async (recipeId: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    if (!response.ok) {
      throw new Error("Error fetching single recipe");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function RecipeDetails({ params: { id } }: RecipeDetailsProps) {
  const singleRecipeDetails: Recipe = await fetchSingleRecipe(id);

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl text-center py-10 font-bold underline">
        {singleRecipeDetails.name}
      </h2>
      <div className="pb-10">
        <h4 className="text-2xl pb-5 underline">Ingredients</h4>
        <ul>
          {singleRecipeDetails.ingredients.map((items, index) => (
            <li key={index}>
              <span>{index + 1}.</span> {items}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-2xl pb-5 underline">Instructions</h4>
        <ul>
          {singleRecipeDetails.instructions.map((items, index) => (
            <li key={index}>
              <span>{index + 1}.</span> {items}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default RecipeDetails;
