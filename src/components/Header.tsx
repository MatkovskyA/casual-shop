import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-400 flex items-center justify-between mx-auto">
      <Navigation />
    </header>
  )
}

export default Header;