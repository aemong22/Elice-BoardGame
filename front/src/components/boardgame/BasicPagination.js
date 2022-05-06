import React, { useEffect } from 'react';
import Pagination from "@mui/material/Pagination";

function BasicPagination({ totalPage, condition, changeCondition }) {
    // useEffect(() => {
    //     if (totalPage < condition.page) {
    //         changeCondition("page", Number(totalPage))
    //     }
    //     console.log("after- totalPage: ", totalPage, "condition.page: ", condition.page)
    // }, [totalPage])

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
