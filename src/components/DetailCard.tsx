import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Cocktail } from '../types'
import useIngredients from '../hooks/useIngredients'
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
  const ingredients = useIngredients(cocktail)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      className={`relative rounded drop-shadow-megetSkyggen bg-white h-[720px] row-span-2 col-span-2 ${className}`}
    >
      <button
        className="w-12 h-12 absolute top-0 right-0 bg-opacity20 bg-white flex items-center justify-center rounded-tr rounded-bl"
        onClick={close}
      >
        <img src={closeIcon} className="" alt="close icon" />
      </button>
      <img
        src={cocktail?.strDrinkThumb}
        alt={cocktail.strDrink}
        className="rounded-t object-cover h-[341px] w-full"
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
