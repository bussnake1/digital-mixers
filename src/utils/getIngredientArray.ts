import { Cocktail } from '../types'

export default function getIngredientArray(cocktail: Cocktail) {
  return Object.entries(cocktail)
    .filter(([key, value]) => key.includes('strIngredient') && value)
    .sort((first, second) => first[0]?.localeCompare(second[0]))
    .map(([, value]) => value) as unknown as [
    string,
    string | null | undefined
  ][]
}
