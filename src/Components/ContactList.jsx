import React from 'react';
import CONTACTS from "../JSONFiles/Contacts.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ViewMessageLogs from "./Footer";

const ContactList = () => {

    return (
        <>
            <h1>Contacts</h1>
            <ViewMessageLogs />
            {CONTACTS.map((items) => {
                return (
                    <Card sx={{ width: 345, margin: 2 }} key={items.id}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Contact
                            </Typography>
                            <Link
                                to={{
                                    pathname: `/contact/${items.id}`
                                }}
                                style={{ textDecoration: "none", color: "black" }}
                                items={items}
                            >
                                <Typography variant="h6" component="div">
                                    First name: {items.firstName}
                                </Typography>
                            </Link>
                            <Link
                                to={{
                                    pathname: `/contact/${items.id}`
                                }}
                                style={{ textDecoration: "none", color: "black" }}
                                items={items}
                            >
                                <Typography variant="h6" component="div">
                                    Last name: {items.lastName}
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )

}

export default ContactList;