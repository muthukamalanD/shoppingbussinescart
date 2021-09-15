export default function NavLi({ text }) {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#!">
          {text}
        </a>
      </li>
    </>
  );
}
