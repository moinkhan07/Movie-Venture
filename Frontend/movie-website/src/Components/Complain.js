import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import {Link} from 'react-router-dom';

const Complain = () => {
  return (
    <>
    <Link to={'/complain'} style={{ textDecoration: "none" }}>
    <div id='complainMainLarge'>
        <MessageIcon sx={{color:"#fc9825",fontSize:"35px"}}/>
    </div>
    </Link>
    <Link to={'/complain'} style={{ textDecoration: "none" }}>
    <div id='complainMainSmall'>
        <MessageIcon sx={{color:"#fc9825",fontSize:"30px"}}/>
    </div>
    </Link>
    </>
  )
}

export default Complain