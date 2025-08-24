import { Link } from "react-router"

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <Link to="/contact">    <button className={`btn ${containerClass}`} onClick={()=>{}}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
    </Link>

  );
};

export default Button;