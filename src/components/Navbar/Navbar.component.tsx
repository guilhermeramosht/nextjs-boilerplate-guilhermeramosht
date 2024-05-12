import project from '@/shared/constants/project'

interface Props {
  className?: string
}

const Navbar: React.FC<Props> = ({ className = '' }) => (
  <nav className={className}>
    <ul className="flex flex-col items-center justify-center gap-5">
      {project.navItems.map((navItem) => (
        <li className="text-center text-xl font-semibold" key={navItem.key}>
          <a href={navItem.href}>{navItem.key}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
