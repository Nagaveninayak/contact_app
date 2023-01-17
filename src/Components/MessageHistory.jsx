import React, { useEffect, useState } from "react";
import CONTACTS from "../JSONFiles/Contacts.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";

const MessageHistory = () => {
    const [logs, setLogs] = useState(false);

    /**Call api twilio log */
    const messageLogs = async () => {
        try {
            await fetch('/api/messagesList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setLogs(data);
                });
        } catch (err) {
            console.log('error', err);
        }
    }

    useEffect(() => {
        messageLogs();
    }, [])

    return (
        <div>
            <h1>History Page</h1>
            {
                logs ?
                    logs.map((log) => {
                        return (
                            <Card sx={{ width: 400, margin: 2, color: "black" }} key={log.dateSent}>
                                <CardContent>
                                    <Typography variant="h6" color="text.secondary" gutterBottom>
                                        Message Logs
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} component="div">
                                        name: {CONTACTS.filter((items) => items.phoneNumber === log.to)[0].firstName}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} component="div">
                                        number: {log.to}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} component="div">
                                        message sent: {log.body.split('-')[1]}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} component="div">
                                        Date sent: {log.dateSent}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} component="div">
                                        status: {log.status}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    }) :
                    <CircularProgress color="inherit" />
            }
            <Link to="/" style={{ color: "white", margin: "20px" }}>
                <Typography variant="h6" component="div">
                    Home
                </Typography>
            </Link>
        </div>
    )
}

export default MessageHistory;