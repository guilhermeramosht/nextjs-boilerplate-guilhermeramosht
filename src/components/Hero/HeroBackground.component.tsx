import Image from 'next/image'

interface Props {
  alt: string
}

const HeroBackground: React.FC<Props> = ({ alt }) => {
  return (
    <>
      <div className="overflow-hidden absolute inset-0">
        <Image
          className="object-cover transition-all duration-1000"
          fill
          src="/hero.jpeg"
          alt={alt}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </>
  )
}

export default HeroBackground
