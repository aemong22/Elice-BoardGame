import React, { useState } from 'react';
import Pagination from "@mui/material/Pagination";

function BasicPagination({ totalPage, condition, changeCondition }) {
  return (
      <>
          <Pagination
              count={totalPage}
              page={condition?.page}
              onChange={(evnet, value) => changeCondition("page", value)}
              showFirstButton
              showLastButton
          />
      </>
  );
}

export default BasicPagination;
