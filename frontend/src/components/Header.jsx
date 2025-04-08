import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">ShoppyGlobe</Link>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
