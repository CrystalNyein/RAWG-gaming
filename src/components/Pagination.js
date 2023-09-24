import React, { useEffect, useState } from "react";
import "./Pagination.css";
import Axios from "axios";

const Pagination = ({ page, count, loadGame, setGameList, setLoading }) => {
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageCount(count / 15 > 15 ? 15 : Math.ceil(count / 15));
  }, [count]);
  
  var apikey = "1a816d94f6234bfda4aa2cd14ed62237";
  const fetchGames = async (loadPage) => {
    setLoading(true);
    await Axios.get(
      `https://api.rawg.io/api/games?key=${apikey}&page=${loadPage}&page_size=15`
    )
      .then((res) => {
        setGameList(res.data.results);
        loadGame("", loadPage);
        setLoading(false);
      })
      .catch((err) => {
        setGameList([]);
        setLoading(false);
      });
  };
  return (
    <nav aria-label="Page navigation my-3">
      <ul className="pagination">
        {page > 1 && (
          <li className="page-item" onClick={() => fetchGames(--page)}>
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}
        {[...Array(pageCount)].map((e, i) =>
          page === i + 1 ? (
            <li
              key={i}
              className="page-item page-item-count active"
              onClick={() => fetchGames("", i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          ) : (
            <li
              key={i}
              className="page-item page-item-count"
              onClick={() => fetchGames(i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          )
        )}
        {page < pageCount && (
          <li className="page-item" onClick={() => fetchGames(++page)}>
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
