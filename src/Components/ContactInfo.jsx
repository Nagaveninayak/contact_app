import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CONTACTS from "../JSONFiles/Contacts.json";
import ViewMessageLogs from "./Footer";

const Contactlist = () => {
    const [contactInfo, setContactInfo] = useState(false);
    const [isSendMsg, setIsSendMsg] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    /* Display contact - name and phone Number */
    /* Button - send message*/

    useEffect(() => {
        const getContact = CONTACTS.filter((items) => items.id === id);
        setContactInfo(getContact[0]);
    }, [])


    useEffect(() => {
        if (isSendMsg > 0) {
            navigate(`/send-message/${contactInfo.phoneNumber}`);
        }
    }, [isSendMsg])

    return (
        <div>
            <h1>Contact Info</h1>
            {contactInfo &&
                <>
                    <Typography variant="h4" component="div" sx={{ margin: 2 }}>Name: {`${contactInfo.firstName} ${contactInfo.lastName}`}</Typography>
                    <Typography variant="h4" component="div" sx={{ margin: 2 }}>Phone: {`${contactInfo.phoneNumber}`}</Typography>
                    <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={() => { setIsSendMsg(isSendMsg + 1) }}>
                        Send Message
                    </Button>
                </>
            }
            <br />
            <ViewMessageLogs />

        </div>
    )
}

export default Contactlist;