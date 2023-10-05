import React from 'react'
import MessageIcon from '@mui/icons-material/Message';

const Complain = () => {
  return (
    <>
    <div id='complainMainLarge'>
        <MessageIcon sx={{color:"#fc9825",fontSize:"35px"}}/>
    </div>
    <div id='complainMainSmall'>
        <MessageIcon sx={{color:"#fc9825",fontSize:"30px"}}/>
    </div>
    </>
  )
}

export default Complain