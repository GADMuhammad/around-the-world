import { Link } from "react-router-dom";
import logoImage from "/planet-outline.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logoImage} width="24" height="28" />
      <h3>Around the world</h3>
    </Link>
  );
};

export default Logo;
