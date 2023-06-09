import { handleNav } from "../utils/DOM/menu";

function Navigation() {
  return (
    <nav>
      <a href="">
        <span className="logo">Logo</span>
      </a>
      <button className="menu" onClick={handleNav} aria-controls="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="35"
          fill="#fff"
        >
          <path d="M369-240v-61h471v61H369Zm0-210v-60h471v60H369ZM120-660v-60h720v60H120Z" />
        </svg>
        <span className="sr-only">menu</span>
      </button>
      <div className="navlinks" aria-expanded="false" aria-label="menu">
        <a href="#">Current listen</a>
        <a href="#">Top tracks</a>
        <a href="#">Recommendations</a>
        <a href="#">Requests</a>
      </div>
    </nav>
  );
}

export default Navigation;
