import Pagination from '@mui/material/Pagination';

function BasicPagination({ total, limit, page, setPage }) {
    const pages = Math.ceil(total / limit);
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
      <>
        <Pagination count={pages} page={page} onChange={handleChange} showFirstButton showLastButton />
        
        {/* <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', margin: '16px' }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
          {Array(pages)
            .fill()
            .map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </button>
            ))}
          <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
        </nav> */}
      </>
    );
  }

  export default BasicPagination;