'use client'

import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar.component'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Props {
  isHamburerShown?: boolean
}

const HeaderNavbar: React.FC<Props> = ({ isHamburerShown = true }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar
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
