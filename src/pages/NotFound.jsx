import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Oops Page not found!</h2>
      <p>
        We're sorry, but it seems like you've ventured into uncharted territory.
        The page you're looking for might have taken a coffee break or decided
        to explore the digital wilderness. Not to worry! You're still in the
        right place, and we're here to guide you back.
      </p>

      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
}
