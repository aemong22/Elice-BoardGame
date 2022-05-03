import React, { useState } from 'react';
import './Sorting.css';
import CheckIcon from '@mui/icons-material/Check';

function Sorting({ changeCondition }) {
  const [type, setType] = useState(undefined);

  const clickHandler = (value) => {
    if (type === value) {
      changeCondition('type', '');
      setType('');
    } else {
      changeCondition('type', value);
      setType(value);
    }
    
  }

  return (
    <>
      <div className='sorting-buttons'>
        <button type='button' 
          onClick={() => clickHandler("rank") }
          className={ type === 'rank' ? 'sorting-buttons select' : 'sorting-buttons' }>
          {type === 'rank' ? <CheckIcon /> : null}
          랭킹순
        </button>
        <button type='button' 
          onClick={() => clickHandler("rating")}
          className={ type === 'rating' ? 'sorting-buttons select' : 'sorting-buttons' }>
          {type === 'rating' ? <CheckIcon /> : null}
          평점순
        </button>
        <button type='button' 
          onClick={() => clickHandler("userRated")}
          className={ type === 'userRated' ? 'sorting-buttons select' : 'sorting-buttons' }>
          {type === 'userRated' ? <CheckIcon /> : null}
          리뷰순
        </button>
      </div>
    </>
  );
}

export default Sorting;