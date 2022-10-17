export function getCocktailUrl({ search }: { search: string }) {
  return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`
}
