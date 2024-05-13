import Typography from '../Typography/Typography.component'
import HeroBackground from './HeroBackground.component'

interface Props {
  title: string
  paragraph: string
}

const Hero: React.FC<Props> = ({ title, paragraph }) => (
  <div className="h-[431px] w-full relative">
    <HeroBackground alt={title} />
    <div className="flex flex-col justify-center relative h-full container mx-auto p-4">
      {title && (
        <Typography className="text-white" component="h1">
          {title}
        </Typography>
      )}
      {paragraph && (
        <Typography className="text-white" component="p">
          {paragraph}
        </Typography>
      )}
    </div>
  </div>
)

export default Hero
