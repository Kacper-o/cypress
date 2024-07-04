'use client'

import React,  { useState } from "react"
import { useRouter } from "next/navigation"

import  SearchManufacturer  from "./SearchManufacturer"
import Image from "next/image"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"


const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
  <button type="submit" className={`bg-primary-blue p-1 rounded-full -ml-3 z-10 ${otherClasses}`}>
    <MagnifyingGlassIcon width={40} height={40} className="object-contain text-gray-200" />
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer === "" && model === "") {
        return alert("Please fill in the search bar")
      }
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if(model) {
        searchParams.set("model", model) 
      } else {
        searchParams.delete("model")
      }

      if(manufacturer) {
        searchParams.set("manufacturer", manufacturer) 
      } else {
        searchParams.delete("manufacturer")
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname, {scroll: false})
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model"/>
          <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input dark:bg-gray-800"/>
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar