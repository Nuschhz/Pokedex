import "../css/pages.css";

import Button from "./buttons";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Pages({ currentPage, maxPages, previousPage, nextPage }) {

  const pageTracker = 
    <div className="PageTracker">
      <div>
        {currentPage}
        </div>de<div>
        {maxPages}
      </div>
    </div>

  return (
    <div className="TabPages">
      <Button children={<FaAngleLeft />} onClick={previousPage}  />
      {pageTracker}
      <Button children={<FaAngleRight />} onClick={nextPage} />
    </div>
  );
}

export default Pages;
