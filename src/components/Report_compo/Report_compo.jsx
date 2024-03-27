import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState,useRef } from "react";
import Button from '@mui/material/Button';
import { theme } from '../Theme/theme';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import pampam from '../../assets/pampam.wav'



function Report_compo() {
    const validationSchema = Yup.object().shape({
        criminel: Yup.string().required("Le nom du criminel est obligatoire"),
        email: Yup.string().required("L'adresse email est obligatoire").email("Veuillez entrer une adresse mail valide"),
        choisirPays: Yup.string().required("Le choix du pays est obligatoire"),
        raisonSignalement: Yup.string().required("La raison du signalement est obligatoire")
    });

    const [countries] = useState([
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
        "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
        "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
        "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Honduras", "Hungary",
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
        "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
        "Oman",
        "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar",
        "Romania", "Russia", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
        "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen",
        "Zambia", "Zimbabwe"
    ]); // Défini une liste de pays

    const initialValues = {
        choisirPays: "",
        criminel: "John Doe",
        email: "john@doe.com",
        raisonSignalement: "Merci d'être le plus précis possible dans votre signalement"
    };

    const [formSubmitted, setFormSubmitted] = useState(false);
    const audioRef = useRef(null);

    function handleSubmit(formValues, { resetForm }) {
        console.log("Form Values", formValues);
        // Envoyer les données du formulaire...
        setFormSubmitted(true); // Met à jour l'état formSubmitted à true après la soumission réussie
        resetForm(); // Réinitialise les valeurs du formulaire
        audioRef.current.play()
    }

    const handleFieldClick = (fieldName, formik) => {
        formik.setFieldValue(fieldName, '');
    };

    const handleFieldChange = (e, formik) => {
        formik.setFieldValue("choisirPays", e.target.value);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <Form style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                       <Box position="relative" width="100%" height="60vh" marginTop="-30px">
                    <img src="src/assets/img/crime_scene.jpg" alt="Crime Scene" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                    <Box position="absolute" top={0} left={0} width="100%" height="80%" bgcolor="rgba(255, 255, 255, 0.6)" />
                    <Box position="absolute" bottom={100} right={0} p={2}>
                        <Typography variant="h3" style={{ 
                            color: 'yellow',
                            fontWeight: 'bold', 
                            WebkitTextStrokeWidth: '1px', 
                            WebkitTextStrokeColor: 'white',}}>
                                Aidez nous à les retrouver</Typography>
                    </Box>
                </Box>
                    <Paper
                     sx={{ 
                        backgroundColor: theme.palette.black.main,
                        border: '2px solid yellow',
                        padding: '20px', // Ajoute un remplissage pour l'espace intérieur
                        // marginTop: 5, // Ajoute un espace en haut du formulaire
                        color: 'white',
                        maxWidth: 500,
                        margin: [5 , 'auto', 0, 'auto'],
       
                    }}
                    >
                    <div>
                        <Box
                        sx={{
                            textAlign:'center',
                            marginBottom: 1,
                        }}><label htmlFor="choisirPays">Choisissez votre pays :</label><br /></Box>
                        <Box
                        sx={{
                            border: '1px solid black', // Exemple de style
                            borderRadius: theme.shape.borderRadius, // Exemple de style
                            padding: '10px', // Exemple de style
                            textAlign: 'center',
                            marginBottom: 1,
                        }}
                        >
                        <Field
                            style={{
                                maxWidth: '100%',
                                width:'400px'
                            }}
                            name="choisirPays"
                            as="select"
                            id="choisirPays"
                            onChange={(e) => handleFieldChange(e, formik)}
                        >
                            <option value="">Choisissez un pays</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </Field>
                        </Box>
                        <Box sx={{
                            marginBottom:2,
                            color:'red',
                            fontWeight: 'bold', 
                            WebkitTextStrokeWidth: '0.1px', 
                            WebkitTextStrokeColor: 'white', 
                        }}><ErrorMessage name="choisirPays" component="span"/></Box>
                    </div>
                    <div>
                        <Box sx={{
                            textAlign:'center',
                            marginBottom: 1,}}>
                                <label htmlFor="criminel">Nom du criminel concerné:</label><br /></Box>
                        <Box
                        sx={{
                            border: '1px solid black', // Exemple de style
                            borderRadius: theme.shape.borderRadius, // Exemple de style
                            padding: '10px', // Exemple de style
                            textAlign: 'center',
                            marginBottom: 1,
                        }}
                        >
                        <Field 
                            style={{
                                maxWidth: '100%',
                                width:'400px'
                            }}
                            name="criminel" 
                            type="text" 
                            id="criminel"
                            onClick={() => handleFieldClick('criminel', formik)}
                        />
                        </Box>

                        <Box sx={{
                            marginBottom:2,
                            color:'red',
                            fontWeight: 'bold', 
                            WebkitTextStrokeWidth: '0.1px', 
                            WebkitTextStrokeColor: 'white', 
                        }}><ErrorMessage name="criminel" component="span"/></Box>
                    </div>
                    <div>
                        <Box sx={{
                            textAlign:'center',
                            marginBottom: 1,}}>
                                <label htmlFor="email">Votre adresse mail:</label><br /></Box>
                        <Box
                        sx={{
                            border: '1px solid black', // Exemple de style
                            borderRadius: theme.shape.borderRadius, // Exemple de style
                            padding: '10px', // Exemple de style
                            textAlign: 'center',
                            marginBottom: 1,
                        }}
                        >
                        <Field 
                            style={{
                                maxWidth: '100%',
                                width:'400px'
                            }}
                            name="email" 
                            type="text" 
                            id="email"
                            onClick={() => handleFieldClick('email', formik)}
                        />
                        </Box>
                        <Box sx={{
                            marginBottom:2,
                            color:'red',
                            fontWeight: 'bold', 
                            WebkitTextStrokeWidth: '0.1px', 
                            WebkitTextStrokeColor: 'white', 
                        }}><ErrorMessage name="email" component="span"/></Box>
                    </div>
                    <div>
                        <Box sx={{
                            textAlign:'center',
                            marginBottom: 1,}}>
                                <label htmlFor="raisonSignalement">Raison du signalement:</label><br /></Box>
                        <Box
                        sx={{
                            border: '1px solid black', // Exemple de style
                            borderRadius: theme.shape.borderRadius, // Exemple de style
                            padding: '10px', // Exemple de style
                            textAlign: 'center',
                            marginBottom: 1,
                        }}
                        >
                        <Field 
                            style={{
                                maxWidth: '100%',
                                width:'400px'
                            }}
                            name="raisonSignalement" 
                            type="textarea" 
                            id="raisonSignalement"
                            component="textarea"
                            onClick={() => handleFieldClick('raisonSignalement', formik)}
                        />
                        </Box>
                        <Box sx={{
                            marginBottom:2,
                            color:'red',
                            fontWeight: 'bold', 
                            WebkitTextStrokeWidth: '0.1px', 
                            WebkitTextStrokeColor: 'white', 
                        }}><ErrorMessage name="raisonSignalement" component="span"/></Box>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button 
                    variant="contained" 
                    size="small"
                    sx={{ 
                        backgroundColor: theme.palette.black.main,
                        borderRadius: theme.shape.borderRadius, // Utilisation correcte de borderRadius
                        border: '2px solid yellow',
                        marginTop: 3,
                    }}
                    onClick={formik.handleSubmit} 
                    endIcon={<SendIcon />}>Envoyer</Button> 
                    </div>

                    {formSubmitted && <Box sx={{marginTop:1}}><div>Le formulaire a bien été envoyé.</div></Box>}
                    <audio ref={audioRef} src={pampam} />
                    </Paper>
                </Form>
            )}
        </Formik>
    );
}

export default Report_compo;
