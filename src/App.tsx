import React, { ReactElement, useState, useEffect } from 'react'
import { getCocktailUrl } from './api/api'
import { Card } from './components/Card'

import useFetch from './hooks/useFetch'
import { Cocktail, Cocktails } from './types'

function App(): ReactElement {
  const [selectedCocktail, setSelectedCocktail] = useState(null)

  const {
    data: cocktails,
    loading,
    error
  } = useFetch<Cocktails>(getCocktailUrl({ search: 'A' }))

  console.log(cocktails)

  if (loading) return <p>Loading..</p>
  if (error) return <p>Error..</p>

  return (
    <div className="px-10 py-[86px] bg-offwhite">
      <header className="font-futura">
        <p className="flex items-center justify-center w-full leading-normal text-2xl">
          Welcome to
        </p>
        <h1 className="flex items-center justify-center w-full font-bold text-5xl leading-normal">
          Digital Mixers
        </h1>
      </header>
      <main className="pt-[103px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {cocktails.drinks.slice(0, 8).map((cocktail: Cocktail) => (
            <Card cocktail={cocktail} key={cocktail.idDrink} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
