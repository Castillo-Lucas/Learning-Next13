import React from "react";
import Link from "next/link";

const SubNavbar = () => {
  return (
    <nav className="container mx-auto p-4">
      <ul className="flex flex-row justify-evenly">
        <li>
          <Link href="/">Computadoras</Link>
        </li>
        <li>
          <Link href="">Impresoras</Link>
        </li>
        <li>
          <Link href="">Mouses</Link>
        </li>

        <li>
          <Link href="">Monitores</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavbar;
