import classNames from "classnames";

import styles from "./tab-link.module.css";
import { NavLink } from "react-router";

export const TabLink = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.activeLink)
      }
    >
      {title}
    </NavLink>
  );
};
