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
            '-translate-x-[100%] transition fixed inset-0 flex items-center justify-center bg-primary',
            {
              'translate-x-0': isOpen
            }
          )
        )}
      />

      {isHamburerShown && (
        <Hamburger
          color="#FFFFFF"
          toggled={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
      )}
    </>
  )
}

export default HeaderNavbar
