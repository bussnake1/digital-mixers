import { useMemo } from 'react'
import { Cocktail } from '../types'
import getIngredientArray from '../utils/getIngredientArray'

export default function useIngredients(cocktail: Cocktail) {
  return useMemo(() => getIngredientArray(cocktail), [cocktail])
}
