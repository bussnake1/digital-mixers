import React, { FunctionComponent, useRef } from 'react'
import { Cocktail } from '../types'

type CardProps = {
  cocktail: Cocktail
  className?: string
  onClick: () => void
  tabIndex: number
  enableHover?: boolean
}

export const Card: FunctionComponent<CardProps> = ({
  cocktail,
  onClick,
  className,
  tabIndex,
  enableHover
}) => {
  const cardRef = useRef<HTMLLIElement>(null)
  return (
    <li
      className={`rounded drop-shadow-megetSkyggen bg-white transform-translate duration-300 ${
        enableHover
          ? 'hover:-translate-y-0.5 hover:drop-shadow-xl hover:cursor-pointer'
          : ''
      } ${className}`}
      onClick={onClick}
      tabIndex={tabIndex}
      ref={cardRef}
      onKeyPress={() => cardRef.current === document.activeElement && onClick()}
    >
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
    </li>
  )
}
