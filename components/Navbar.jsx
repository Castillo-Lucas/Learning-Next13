import React from "react";
import Link from "next/link";

//Este componente se renderiza del lado del servidor
const Navbar = () => {
  return (
    <nav className="container mx-auto p-4">
      <ul className="flex flex-row justify-evenly">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/nosotros ">Nosotros</Link>
        </li>
        <li>
          <Link href="/posts">Posteos</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
