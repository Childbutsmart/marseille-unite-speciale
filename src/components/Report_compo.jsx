import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

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

    function handleSubmit(formValues, { resetForm }) {
        console.log("Form Values", formValues);
        // Envoyer les données du formulaire...
        setFormSubmitted(true); // Met à jour l'état formSubmitted à true après la soumission réussie
        resetForm(); // Réinitialise les valeurs du formulaire
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
                <Form>
                    <div>
                        <label htmlFor="choisirPays">Inscrivez votre pays :</label>
                        <Field
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
                        <ErrorMessage name="choisirPays" component="span"/>
                    </div>
                    <div>
                        <label htmlFor="criminel">Nom du criminel concerné:</label>
                        <Field 
                            name="criminel" 
                            type="text" 
                            id="criminel"
                            onClick={() => handleFieldClick('criminel', formik)}
                        />
                        <ErrorMessage name="criminel" component="span"/>
                    </div>
                    <div>
                        <label htmlFor="email">Votre adresse mail:</label>
                        <Field 
                            name="email" 
                            type="text" 
                            id="email"
                            onClick={() => handleFieldClick('email', formik)}
                        />
                        <ErrorMessage name="email" component="span"/>
                    </div>
                    <div>
                        <label htmlFor="raisonSignalement">Raison du signalement:</label>
                        <Field 
                            name="raisonSignalement" 
                            type="textarea" 
                            id="raisonSignalement"
                            component="textarea"
                            onClick={() => handleFieldClick('raisonSignalement', formik)}
                        />
                        <ErrorMessage name="raisonSignalement" component="span"/>
                    </div>
                    <button type="submit">Envoyer</button> 

                    {formSubmitted && <div>Le formulaire a bien été envoyé.</div>}
                </Form>
            )}
        </Formik>
    );
}

export default Report_compo;
