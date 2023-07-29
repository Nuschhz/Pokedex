import "../css/pages.css";

import Button from "./buttons";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Pages({ currentPage, maxPages, previousPage, nextPage }) {

  return (
    <div className="TabPages">
      <Button children={<FaAngleLeft />} fn={previousPage}  />
      <div className="PageTracker"><div>{currentPage}</div>de<div>{maxPages}</div></div>
      <Button children={<FaAngleRight />} fn={nextPage} />
    </div>
  );
}

export default Pages;
