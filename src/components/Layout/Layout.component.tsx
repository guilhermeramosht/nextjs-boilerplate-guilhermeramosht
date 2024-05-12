import Header from '../Header/Header.component'

interface Props {
  children: React.ReactNode
  menu: { [key: string]: string }
}

const Layout: React.FC<Props> = ({ children, menu }) => (
  <main className="min-h-screen">
    <Header menu={menu} />
    <div className="flex flex-col items-center justify-between p-24">
      {children}
    </div>
  </main>
)

export default Layout
