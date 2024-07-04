"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import { SunIcon } from '@heroicons/react/20/solid'
import { MoonIcon } from '@heroicons/react/24/solid'



const ThemeButton = () => {
    const {resolvedTheme, setTheme} = useTheme()
  return (
    <button className='bg-primary-blue cursor-pointer relative w-20 h-10 rounded-full' onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
  <span className="w-2/5 h-4/5 text-white p-1 absolute rounded-full left-1 top-1 dark:bg-white dark:left-11 bg-black transition-all duration-500 dark:text-black">
    {resolvedTheme === "dark" ? (
      <SunIcon/>
    ) : (
      <MoonIcon/>
    )}
  </span>
  </button>)
}

export default ThemeButton