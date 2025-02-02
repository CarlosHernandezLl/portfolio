import React, { useContext } from 'react';
import { TextField, Button, Icon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from '@mui/material/styles';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase.js';
import ThemeContext from '../ThemeContext.jsx';
import '../styles/Contact.css';


const darktheme = createTheme({
    palette: {
        mode: 'dark',
    }

});


export const ContactForm = () => {

    // const { theme } = useContext(ThemeContext);

    const [formul, setFormul] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [send, setSend] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formul);
        // Aquí puedes agregar lógica adicional para validar y enviar los datos
        if (!formul.name || !formul.email || !formul.message) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            // Guardar datos en Firestore
            await addDoc(collection(db, "contacts"), formul);
            console.log("Los datos fueron enviados correctamente");
            setSend(true);
            setFormul({ name: '', email: '', message: '' });
            setTimeout(() => setSend(false), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred while submitting the form.");
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormul({
            ...formul,
            [id]: value
        });
    }

    return (
        <ThemeProvider theme={darktheme}>
            <form onSubmit={handleSubmit}>
                {send && (
                    <Alert icon={<CheckIcon />} severity="success" style={{ marginBottom: '16px' }}>
                        Your message was successful.
                    </Alert>
                )}
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={handleChange}
                    type='text'
                    value={formul.name}
                />
                <br />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type='email'
                    value={formul.email}
                    onChange={handleChange}

                />
                <br />
                <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formul.message}
                    onChange={handleChange}

                />
                <br />
                <Button variant="outlined" type='submit'>Send</Button>
            </form>
        </ThemeProvider>

    )
}