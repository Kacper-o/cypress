import Link from "next/link";
import Image from "next/image";

import  CustomButton  from "./CustomButton";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
   <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
        <div className="flex items-center w-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
</svg>
<p className="font-bold text-2xl">CARhub</p>
          </div>
        </Link>
       {/*  <CustomButton 
          title="Sign In" 
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        /> */}
        <ThemeButton/>
      </nav>
   </header>
  )
}

export default Navbar