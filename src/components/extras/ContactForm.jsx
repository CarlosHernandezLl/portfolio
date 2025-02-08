import React, { useContext } from 'react';
import { TextField, Button, Icon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase.js';
import ThemeContext from '../../ThemeContext.jsx';
import '../../styles/Contact.css';
import { motion } from 'framer-motion';


const darktheme = createTheme({
    palette: {
        mode: 'dark',
    }

});


export const ContactForm = () => {

    const [formul, setFormul] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [send, setSend] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica adicional para validar y enviar los datos


        try {
            if (!formul.name || !formul.email || !formul.message) {
                setSend(false);
                alert("Please fill in all fields.");
                return;
            }
            else {
                // Guardar datos en Firestore
                await addDoc(collection(db, "contacts"), formul);
                console.log("Los datos fueron enviados correctamente");
                setSend(true);
                setFormul({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setSend(false)
                }, 5000);
            }
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
        <motion.div
            initial={{
                opacity: 0,
                x: -100,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2,
                    duration: 0.5
                }
            }}
        >
            
            <ThemeProvider theme={darktheme}>
                <form onSubmit={handleSubmit}>
                    {
                        send && <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}>Message sent successfully</Alert>
                    }
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

        </motion.div>
    )
}