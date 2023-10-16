import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const ComplainBox = () => {
  const [complaint, setComplaint] = useState('');

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = () => {
    // Create a JSON object to send as the request body
    const data = { complaint };

    fetch('http://your-api-endpoint-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert('Complaint sent successfully');
          setComplaint('');
        } else {
          // Handle error responses here
          console.error('Failed to send complaint');
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