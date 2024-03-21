
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    criminel: Yup.string().required("Le nom du criminel est obligatoire"),
    email: Yup.string().required("L'adresse email est obligatoire").email("Veuillez entrer une adresse mail valide"),
    choisirPays: Yup.string().required("Le nom du criminel est obligatoire"),
    raisonSignalement: Yup.string().required("La raison du signalement est obligatoire")
});

// console.log(validationSchema);

function Report_compo() {
    const initialValues = {
        choisirPays: "Ex : France",
        criminel: "John Doe",
        email: "john@doe.com",
        raisonSignalement: "Merci d'être le plus précis possible dans votre signalement"
    };

    function handleSubmit(formValues) {
        console.log("Form Values", formValues);
    }

    const handleFieldClick = (fieldName, formik) => {
        formik.setFieldValue(fieldName, '');
        //permet d'obtenir une référence à l'objet formik pour pouvoir utiliser la méthode setFieldValue dans le composant Formik
    };

    console.log(Formik);
    
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            {formik => (
                <Form>
                    {/* permet d'importer le Form en tant que composant */}
                    <div>
                        <label htmlFor="choisirPays">Inscrivez votre pays :</label>
                        <Field 
                        name="choisirPays" 
                        type="text" 
                        id="choisirPays"
                        onClick={() => handleFieldClick('choisirPays', formik)}
                        // permet d'effacer la valeur par défaut inscrite dans l'input au moment de cliquer dessus
                        />
                        {/* permet d'importer Field en tant que composant et de remplacer l'input ainsi que toutes les valeurs onchange, on blur ...   */}
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
                         name="raisonSignalement" type="textarea" 
                         id="raisonSignalement"
                         component="textarea"
                         onClick={() => handleFieldClick('raisonSignalement', formik)}
                         />
                        <ErrorMessage name="raisonSignalement" component="span"/>
                    </div>
                    <button type="submit">Envoyer</button>
                </Form>
            )}
        </Formik>
        
    );
}

export default Report_compo;
