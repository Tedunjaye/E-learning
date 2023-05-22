import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack 
      className='stack' 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        p: 2,
        color: 'whitesmoke', 
      }}
    >
      <div>
        <Link to='/'> <AutoStoriesTwoToneIcon /> </Link>

        <Link to='/about'> Why E-learning </Link>
        <Link to='/sign-up'> Create account </Link>
        <Link to='/login'> Login </Link>
      </div>
    </Stack>
  )
}

export default Navbar