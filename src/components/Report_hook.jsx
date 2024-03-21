import { useFormik } from "formik";
import * as Yup from "yup"

// création d'un chemin de validation Yup

const validationSchema = Yup.object().shape({
    criminel : Yup.string().required("Le nom du criminel est obligatoire"),
    email : Yup.string().required("L'adresse email est obligatoire")
            .email("Veuillez entrer une adresse mail valide"),
    choisirPays : Yup.string().required("Le nom du criminel est obligatoire"),
    raisonSignalement : Yup.string().required("La raison du signalement est obligatoire")
})

function Report() {
    const initialValues = {
        choisirPays: "Ex : France",
        criminel: "",
        email: "john@doe.com",
        raisonSignalement: "Merci d'être le plus précis possible dans votre signalement"
    };

    function handleSubmit(formValues) {
        console.log("Form Values", formValues);
    }


    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema // permet de dire à formik qu'il faut utiliser le schema de validation crée via Yup
    });

    // console.log("Errors", formik.errors);

    const handleFieldClick = fieldName => {
        formik.setFieldValue(fieldName, '');
    };

    // console.log(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="choisirPays">Inscrivez votre pays :</label>
                <input
                    type="text"
                    name="choisirPays"
                    id="choisirPays"
                    required
                    onClick={() => handleFieldClick('choisirPays')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.choisirPays}
                />
                {
                formik.errors.choisirPays && formik.touched.choisirPays &&
                <span>{formik.errors.choisirPays}</span>
                }
            </div>
            <div>
                <label htmlFor="criminel">Nom du criminel concerné:</label>
                <input
                    type="text"
                    id="criminel"
                    name="criminel"
                    required
                    onClick={() => handleFieldClick('criminel')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.criminel}
                />
                {
                formik.errors.criminel && formik.touched.criminel &&
                <span>{formik.errors.criminel}</span>
                }
            </div>
            <div>
                <label htmlFor="email">Votre adresse mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onClick={() => handleFieldClick('email')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //lorsque je rempli le champs et que je quitte le champs formik sait que ce champs à été touché
                    value={formik.values.email}
                />
                {
                formik.errors.email && formik.touched.email &&
                <span>{formik.errors.email}</span>
                }
            </div>
            <div>
                <label htmlFor="raisonSignalement">Raison du signalement:</label>
                <textarea
                    id="raisonSignalement"
                    name="raisonSignalement"
                    required
                    onClick={() => handleFieldClick('raisonSignalement')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.raisonSignalement}
                ></textarea>
                {
                formik.errors.raisonSignalement && formik.touched.raisonSignalement &&
                <span>{formik.errors.raisonSignalement}</span>
                }
                {/* Si raisonSignal.error existe et que l'input raisonSignalement a été touché, alors alors affiche moi le message dans un span */}
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Report;
