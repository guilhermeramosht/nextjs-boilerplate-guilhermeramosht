import clsx from 'clsx'
import Typography from '../Typography/Typography.component'
import { twMerge } from 'tailwind-merge'

interface Props {
  title?: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<Props> = ({ children, title, className }) => (
  <div className={clsx(twMerge('py-12 px-8 container mx-auto', className))}>
    {title && <Typography component="h2">{title}</Typography>}
    {children}
  </div>
)

export default Section
