import React, { ReactElement, useState, useEffect } from 'react'
import { getCocktailUrl } from './api/api'
import { Card } from './components/Card'
import { DetailCard } from './components/DetailCard'

import useFetch from './hooks/useFetch'
import { Cocktail, Cocktails } from './types'

function App(): ReactElement {
  const [selectedCocktail, setSelectedCocktail] = useState<null | Cocktail>(
    null
  )
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const {
    data: cocktails,
    loading,
    error
  } = useFetch<Cocktails>(getCocktailUrl({ search: 'A' }))

  // console.log(cocktails)

  const onCardClick = (cocktail: Cocktail, index: number) => {
    if (selectedCocktail) return
    setSelectedCocktail(cocktail)
    setSelectedIndex(index)
  }

  const isEverySecondPair = (i: number) => i % 4 === 0 || i % 4 === 1
  const isLeftSide = (i: number) => isEverySecondPair(i)
  const hideCard = (cardIndex: number, selectedIndex: number) =>
    isEverySecondPair(cardIndex) === isEverySecondPair(selectedIndex)

  if (loading) return <p>Loading..</p>
  if (error) return <p>Error..</p>

  return (
    <div className="px-4 md:px-10 py-[86px] bg-offwhite">
      <header className="font-futura">
        <p className="flex items-center justify-center w-full leading-normal text-2xl">
          {selectedCocktail ? 'You have selected' : 'Welcome to'}
        </p>
        <h1 className="flex items-center justify-center w-full font-bold text-5xl leading-normal">
          {selectedCocktail
            ? selectedCocktail?.strDrink || 'A drink'
            : 'Digital Mixers'}
        </h1>
      </header>
      <main className="pt-[103px] flex space-x-10">
        <ul className="grid gap-10 w-full grid-cols-1 md:grid-cols-4 grid-flow-row">
          {cocktails.drinks.slice(0, 8).map((cocktail: Cocktail, i) => (
            <Card
              tabIndex={i + 1}
              cocktail={cocktail}
              key={cocktail.idDrink}
              onClick={() => onCardClick(cocktail, i)}
              enableHover={!selectedCocktail}
              className={
                selectedCocktail
                  ? hideCard(i, selectedIndex)
                    ? 'hidden'
                    : 'hidden md:block'
                  : ''
              }
            />
          ))}
          {selectedCocktail && (
            <DetailCard
              cocktail={selectedCocktail}
              className={
                selectedCocktail
                  ? `block ${
                      isLeftSide(selectedIndex)
                        ? 'row-start-1 md:row-end-3 md:col-start-1 md:col-end-3'
                        : 'row-start-1 md:row-end-3 md:col-start-3 md:col-end-5'
                    }`
                  : 'hidden'
              }
              close={() => setSelectedCocktail(null)}
            />
          )}
        </ul>
      </main>
    </div>
  )
}

export default App
