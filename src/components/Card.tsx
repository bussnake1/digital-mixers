import React, { FunctionComponent } from 'react'
import { Cocktail } from '../types'

type CardProps = {
  cocktail: Cocktail
}

export const Card: FunctionComponent<CardProps> = ({ cocktail }) => {
  return (
    <div className="rounded drop-shadow-md bg-white transform-translate hover:-translate-y-0.5 duration-300 hover:drop-shadow-xl hover:cursor-pointer">
      <img
        src={cocktail?.strDrinkThumb}
        alt={cocktail.strDrink}
        className="rounded-t h-[240px] w-full object-cover"
      />
      <div className="leading-normal pt-4 px-4 pb-6 space-y-1 text-[15px]">
        <p>{cocktail.strDrink}</p>
        <p className="text-[13px] leading-[130%] line-clamp-2">
          {cocktail.strInstructions}
        </p>
      </div>
    </div>
  )
}
