import React from "react";
import { Link } from "react-router-dom";

// Estilos
import './BreadCrumb.scss';

const Breadcrumb = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <nav className="nav-header" style={{margin: 'auto', maxWidth: '1200px', textAlign: 'left'}}>
      {/* Link back to any previous steps of the breadcrumb. */}
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>
            {name}
          </span>
        ) : (
          <Link key={key} to={path}>
            {name} {" > "}
          </Link>
        )
      )}
      </nav>
  );
};
export default Breadcrumb;