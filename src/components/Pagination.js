import React from "react";
import "./Pagination.css";

const Pagination = ({ loadGame, page }) => {
  return (
    <nav aria-label="Page navigation example my-3">
      <ul className="pagination">
        {page > 1 && (
          <li className="page-item" onClick={() => loadGame("", --page)}>
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}
        {[...Array(10)].map((e, i) =>
          page === i + 1 ? (
            <li
              key={i}
              className="page-item active"
              onClick={() => loadGame("", i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          ) : (
            <li
              key={i}
              className="page-item"
              onClick={() => loadGame("", i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          )
        )}
        {page < 15 && (
          <li className="page-item" onClick={() => loadGame("", ++page)}>
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
