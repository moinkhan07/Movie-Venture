import React,{useState} from 'react'
import SendIcon from '@mui/icons-material/Send';

const ComplainBox = () => {
  const [complaint, setComplaint] = useState('');

  const mainUrl = "https://api.movieventure.xyz/api";

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = () => {
    const data = { complainMessage: complaint };
    if(data.complainMessage == ""){
      window.alert("Field is empty!")
      return;
    }
    
    if (data.complainMessage.length > 255) {
      window.alert("Length should be less than 255 characters!");
      return;
    }

    fetch(`${mainUrl}/complains`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 202) {
          window.alert('Complaint sent successfully');
          setComplaint('');
        } else {
          window.alert('Failed to send complaint');
          setComplaint('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div id='complainBoxMain'>
        <div id='complainBoxInput'>
            <h1>Complain</h1>
            <textarea placeholder='Enter Complain Here...' rows="4" cols="50" id='complainInput' value={complaint} onChange={handleComplaintChange} ></textarea>
            <button onClick={handleSubmit}> <SendIcon sx={{fontSize:"30px",color:"white"}}/> </button>
        </div>
    </div>
  )
}

export default ComplainBox