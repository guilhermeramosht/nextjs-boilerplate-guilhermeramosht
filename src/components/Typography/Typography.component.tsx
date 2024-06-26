import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  component: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  children: React.ReactNode
}

const getClassNames = (component: Props['component']) => {
  switch (component) {
    case 'h1':
      return 'text-4xl mb-4 md:text-5xl font-bold'

    case 'h2':
      return 'text-3xl mb-4 font-bold'

    case 'h3':
      return 'text-lg mb-4 font-bold'

    default:
      return 'text-base'
  }
}

const Typography: React.FC<Props> = ({
  component: Component = 'p',
  className,
  children
}) => {
  return (
    <Component className={clsx(twMerge(getClassNames(Component), className))}>
      {children}
    </Component>
  )
}

export default Typography
