import * as React from "react";
import { Link } from "gatsby";

const Menu = ({ menu, className }) => {
  return (
    <ul className={`flex gap-6 ${className}`}>
      {menu.menuItems.nodes.map((menuItem) => (
        <li key={menuItem.id}>
          <Link to={menuItem.url} className="text-black">
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
