import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Sorting({ changeCondition }) {

  return (
    <>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
            m: 1,
            },
        }}
        >
        <ButtonGroup variant="text" aria-label="text button group">
            <Button sx={{ color: 'gray' }} onClick={() => changeCondition("type", "rank")}>랭킹순</Button>
            <Button sx={{ color: 'gray' }} onClick={() => changeCondition("type", "rating")}>평점순</Button>
            <Button sx={{ color: 'gray' }} onClick={() => changeCondition("type", "userRated")}>리뷰순</Button>
        </ButtonGroup>
        </Box>
    </>
  );
}

export default Sorting;