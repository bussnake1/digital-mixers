import React, { FunctionComponent } from 'react'
import { Cocktail } from '../types'
import getIngredientArray from '../utils/getIngredientArray'
import closeIcon from '../../assets/icons/close.svg'

type DetialCardProps = {
  cocktail: Cocktail
  className?: string
  close: () => void
}

export const DetailCard: FunctionComponent<DetialCardProps> = ({
  cocktail,
  className,
  close
}) => {
  // todo: should be memoized later
  const ingredients = getIngredientArray(cocktail)

  return (
    <div
      className={`relative rounded drop-shadow-md bg-white h-full row-span-2 col-span-2 ${className}`}
    >
      <button
        className="w-12 h-12 absolute top-0 right-0 opacity-20 bg-white flex items-center justify-center rounded-tr rounded-bl"
        onClick={close}
      >
        <img src={closeIcon} className="opacity-100" alt="close icon" />
      </button>
      <img
        src={cocktail?.strDrinkThumb}
        alt={cocktail.strDrink}
        className="rounded-t object-cover"
      />
      <div className="pt-4 px-4 pb-[55px] text-2xl leading-normal">
        <p>{cocktail.strDrink}</p>
        <p className="text-base leading-[130%] pt-4">
          {cocktail.strInstructions}
        </p>
        <p className="text-lg py-4">Ingredients</p>
        <ol className="text-base leading-[130%] list-disc list-inside">
          {ingredients.map((ingredient) => (
            <li key={ingredient as unknown as string}>{ingredient}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
