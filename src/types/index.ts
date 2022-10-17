export type Cocktail = {
  idDrink: string | null
  strDrink: string | undefined
  strDrinkAlternate: null
  strTags: null
  strVideo: null
  strCategory: string | null
  strIBA: null
  strAlcoholic: string | null
  strGlass: string | null
  strInstructions: string | null
  strInstructionsES: string | null
  strInstructionsDE: string | null
  strInstructionsFR: null
  strInstructionsIT: string | null
  'strInstructionsZH-HANS': null
  'strInstructionsZH-HANT': null
  strDrinkThumb: string | undefined
  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: null
  strIngredient6: null
  strIngredient7: null
  strIngredient8: null
  strIngredient9: null
  strIngredient10: null
  strIngredient11: null
  strIngredient12: null
  strIngredient13: null
  strIngredient14: null
  strIngredient15: null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: null
  strMeasure6: null
  strMeasure7: null
  strMeasure8: null
  strMeasure9: null
  strMeasure10: null
  strMeasure11: null
  strMeasure12: null
  strMeasure13: null
  strMeasure14: null
  strMeasure15: null
  strImageSource: null
  strImageAttribution: null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
}

export type Cocktails = {
  drinks: Cocktail[]
}
