import project from '@/shared/constants/project'
import HeaderNavbar from './HeaderNavbar.component'

interface Props {
  menu: { [key: string]: string }
}

const Header: React.FC<Props> = ({ menu }) => (
  <div className="bg-primary text-white py-8 px-6">
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-xl font-semibold">{project.appName}</h1>
      <HeaderNavbar menu={menu} />
    </div>
  </div>
)

export default Header
