import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-300 flex justify-center">
      <Link to="/" className="mx-5 my-2 text-sm">国ごとの感染状況</Link>
      <Link to="/world" className="mx-5 my-2 text-sm">世界の感染状況</Link>
    </div>
  );
};

export default Header;
