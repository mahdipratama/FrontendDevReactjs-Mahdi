import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="layout ">
      <Link to="/">
        <p className="inline text-xl font-bold text-teal-500">FoodyFood</p>
      </Link>
    </nav>
  );
}

export default Nav;
