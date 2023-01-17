import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ViewMessageLogs from "./Footer";
import { Link } from "react-router-dom";

const Contactlist = () => {
    const [otp, setOtp] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const { number } = useParams();

    /**Generate random OTP */
    useEffect(() => {
        const numberOtp = Math.floor(100000 + Math.random() * 900000);
        setOtp(numberOtp);
    }, [])

    const handleMessage = async () => {
        const message = {
            to: number,
            body: `${messageValue} and Your OTP is: ${otp}`
        }
        await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Message sent successfully");
                    setMessageValue('');
                } else {
                    alert("Error in sendin message");
                    setMessageValue('');
                }
            });
    }

    return (
        <div>
            <h1>New Message Screen</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' }
                }}
                noValidate
                autoComplete="off">
                <Typography variant="h6" component="div" sx={{ margin: 2, input: { color: "white" } }}>Please enter your message</Typography>
                <div>
                    <textarea
                        style={{ fontSize: '18px', fontFamily: "sans-serif" }}
                        value={messageValue}
                        onChange={(e) => { setMessageValue(e.target.value) }}
                    />
                </div>
                <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={handleMessage} sx={{ mt: 2 }}>
                    Send Message
                </Button>
            </Box>
            <ViewMessageLogs /><br />
            <Link to="/" style={{ color: "white", margin: "20px" }}>
                <Typography variant="h6" component="div">
                    Home
                </Typography>
            </Link>
        </div>
    )
}

export default Contactlist;