import Header from '../Header/Header.component'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <main className="min-h-screen">
    <Header />
    <div className="flex flex-col items-center justify-between p-24">
      {children}
    </div>
  </main>
)

export default Layout
