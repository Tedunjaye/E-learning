import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack 
      className='stack' 
      style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        padding: 10,
        color: 'whitesmoke', 
      }}
    >
      <div>
        <Link to='/'> <AutoStoriesTwoToneIcon /> </Link>
      </div>
      <div style={{ display: 'flex', gap: 15 }}>
        <Link to='/about' sx={{ mr: 5 }}> Why E-learning </Link>
        <Link to='/sign-up' sx={{ mr: 5 }}> Create account </Link>
        <Link to='/login'> Login </Link>
      </div>
    </Stack>
  )
}

export default Navbar