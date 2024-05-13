'use client'

import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar.component'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Props {
  isHamburerShown?: boolean
  menu: { [key: string]: string }
}

const HeaderNavbar: React.FC<Props> = ({ isHamburerShown = true, menu }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar
        menu={menu}
        className={twMerge(
          clsx(
            '-translate-x-[100%] md:translate-x-0 transition fixed inset-0 flex items-center justify-center bg-primary z-10 md:static md:bg-transparent md:inset-auto md:flex-row md:justify-end md:gap-8 md:z-0',
            {
              'translate-x-0': isOpen
            }
          )
        )}
      />

      {isHamburerShown && (
        <div className="z-20 md:hidden">
          <Hamburger
            color="#FFFFFF"
            toggled={isOpen}
            toggle={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
    </>
  )
}

export default HeaderNavbar
