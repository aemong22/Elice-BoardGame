export function pagingServerSide(curpage, pageSize) {
    const DEFAULT_START_PAGE = 1;
    const DEFAULT_PAGE_SIZE = 5;

    if (!curpage || curpage <= 0) curpage = DEFAULT_START_PAGE;
    if (!pageSize || pageSize <= 0) pageSize = DEFAULT_PAGE_SIZE;

    let result = {
        offset: (curpage - 1) * Number(pageSize),
        limit: Number(pageSize),
    };

    return result;
}
