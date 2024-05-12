import project from '@/shared/constants/project'
import HeaderNavbar from './HeaderNavbar.component'

const Header = () => (
  <div className="bg-primary text-white py-8 px-6">
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-xl font-semibold">{project.appName}</h1>
      <HeaderNavbar />
    </div>
  </div>
)

export default Header
