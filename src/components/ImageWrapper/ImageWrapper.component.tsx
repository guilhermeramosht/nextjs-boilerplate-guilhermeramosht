import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
}

const ImageWrapper: React.FC<Props> = ({ children, className }) => (
  <div className={clsx(twMerge('relative', className))}>{children}</div>
)

export default ImageWrapper
