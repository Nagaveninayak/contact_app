import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

const ViewMessageLogs = () => {
    return (
        <Link to="/message-history" style={{ color: "white", margin: "20px" }}>
            <Typography variant="h6" component="div">
                View Latest Messages
            </Typography>
        </Link>
    )
}

export default ViewMessageLogs;