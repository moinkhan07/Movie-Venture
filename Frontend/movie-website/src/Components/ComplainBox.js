import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const ComplainBox = () => {
  return (
    <div id='complainBoxMain'>
        <div id='complainBoxInput'>
            <h1>Complain</h1>
            <textarea placeholder='Enter Complain Here...' rows="4" cols="50" id='complainInput' ></textarea>
            <button> <SendIcon sx={{fontSize:"30px",color:"white"}}/> </button>
        </div>
    </div>
  )
}

export default ComplainBox