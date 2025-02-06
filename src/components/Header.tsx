
const Header = () => {

  return (
    <header className="py-12 bg-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        <img
          src="icon/logo.svg"
          alt="logo de bebidas"
          className="w-24" />

        <nav className="flex gap-4">
          <a href="">Home</a>
          <a href="">Favoritos</a>
        </nav>
      </div>
    </header>
  )
}

export default Header