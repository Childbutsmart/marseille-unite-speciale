import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import Niveau1 from "/src/components/niveau1.json"
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, TextField, Button, Box, Grid } from '@mui/material';



const List = () => {

    // Récupére les infos de l'API
    const [CardsInfos, setCardsInfos] = useState([]);

    // Etat de la partie infos supplémentaires pour la montrer ou non
    const [showMore, setshowMore] = useState(false)

    // Récupére le criminel sur lequelle l'utilisateur à cliqué
    const [current, setCurrent]= useState([])

    // Référence de la div contenant les infos supplémentaires 
    const newDivRef = useRef(null); 
    
    // Référence de la div principal
    const newDivRef2 = useRef(null); 


    // Fonction permettant de revenir au top de la page lors du click sur le boutton assigné
    const clicked = () => {
        if (newDivRef2.current) {
            newDivRef2.current.scrollIntoView({ behavior: "smooth" }); // Faire défiler jusqu'à la nouvelle div
        }
    };


    // Fonction récupérant les data des criminels
    const fetchData = () => {
    // const fetchData = async () => {
        // try {
        //     const response = await axios.get("");
        //     const resJSON = await response.data._embedded.notices;
            
        //     const infos = await Promise.all(resJSON.map(async (element) => {
        //         const resp = await axios.get(element._links.self.href);
        //         const finalResp = resp.data;
        //         return finalResp;
        //     }));
        //     setCardsInfos(infos);
        // } catch (error) {
        //     console.error("Une erreur s'est produite lors de la récupération des données :", error);
        // }
        const datas = Niveau1.suspects
        setCardsInfos(datas)
    };

    // Lance la fonction fetchData
    useEffect(() => {
        fetchData();
    },[]);


    // Fonction permettant de récupére la data du criminel cliqué & scroll vers l'info supp si la ref de la div existe déjà
    const more = (data) => {
        setshowMore(true);
        setCurrent([data])
        if (newDivRef.current) {
            window.scrollTo({
                top: newDivRef.current.offsetTop,
                behavior: "smooth"
            });
        }
    };



        
    // Le problème que vous rencontrez est dû au fait que current est mis à jour de manière asynchrone, c'est-à-dire que lorsque vous appelez console.log (current), la valeur actuelle de current n'a pas encore été mise à jour. Cela crée un décalage entre l'affichage de showMore et current.
    // Pour corriger cela, vous pouvez utiliser useEffect pour observer les changements de current et mettre à jour showMore lorsque current change.
    // Ainsi showMore sera mis à jour dès que current change, ce qui garantit que l'affichage de l'information supplémentaire sera cohérent.

    useEffect(() => {
        setshowMore(!!current.length);
        // 👇 console.log pour debugger et de bien paramétrer les infos supp :
        // console.log(current);
    }, [current]);



    // Si showMore est true et si il existe une div ayant pour ref newDivRef (et ceux via le current) alors lors de l'appel de shoowMore la page scrollera de maniére smooth jusqu'à la cible
    useEffect(() => {
        if (showMore && newDivRef.current) {
            newDivRef.current.scrollIntoView({ behavior: "smooth" }); // Faire défiler jusqu'à la nouvelle div
        }
    }, [showMore]);



    // ANCHOR Fonction pour adapter l'affichage selon la valeur saisie dans la searchBar

    const searching =  (e) => {
    // const searching = async (e) => {
    //     try {
    //         const response = await axios.get("https://ws-public.interpol.int/notices/v1/red");
    //         const resJSON = await response.data._embedded.notices;
            
    //         const infos = await Promise.all(resJSON.map(async (element) => {
    //             const resp = await axios.get(element._links.self.href);
    //             const finalResp = await resp.data;
    //             return finalResp;
    //         }));
    //         const finalTab = infos.filter(element => {return element.name.toLowerCase().includes(e.target.value.toLowerCase())})
    //         setCardsInfos(finalTab)
    //     }
    //     catch (error) {
    //         console.error("Une erreur s'est produite lors de la récupération des données :", error);
    //     }
        const datas = Niveau1.suspects
        const finalTab = datas.filter(element => {return element.name.toLowerCase().includes(e.target.value.toLowerCase())})
        setCardsInfos(finalTab)
    };

    return (
        <>
            <Box ref={newDivRef2} sx={{ 
                display: 'flex',
                flexDirection: 'column',
                marginTop: '150px', 
                maxWidth: '100%',
            }}>
                <Typography variant="h1" style={{
                        textAlign: 'center'
                }}>
                    Liste des Criminels recherchés par INTERPOL
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    maxWidth: '100%',
                    minHeight: '800px',
                }}>
                    
                    {/* ANCHOR Search Bar */}
                    
                    <Box id="searchBar" sx={{
                        padding: '2px',
                        marginLeft: '1em',
                        maxWidth: 'fit-content',
                        border: '1px solid grey',
                        borderRadius: '10px',
                    }}>
                        <TextField 
                            type="text" 
                            placeholder="recherchez le nom ici"
                            onChange={(e) => {searching(e)}}
                            sx={{
                                paddingLeft: '8px',
                                boxShadow: 'none',
                                border: 'none',
                            }}
                        />
                        <img src="#" alt="loupe"/>
                    </Box>
                    
                    {/* ANCHOR Carroussel */}

                    <Box key={1} id="crimeContainer" sx={{
                        minHeight: '600px',
                        width: '80%',
                        margin: 'auto',
                        overflow: 'hidden',
                    }}>
                        <Carousel
                            autoPlay={false}
                            animation="slide"
                            timeout={500}
                            indicators={false}
                            navButtonsAlwaysInvisible={false}
                            slidesToShow={4} // Afficher 4 articles à la fois
                            style={{ 
                                margin: 'auto', 
                                maxWidth: '100%', 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row', 
                                alignItems: 'stretch', // Pour forcer les éléments à s'étirer verticalement
                            }}>
                                {CardsInfos.map((element) => (
                                    <Box key={element.entity_id} id={element.entity_id}>
                                        <Paper sx={{ 
                                            maxWidth: '450px', 
                                            // height: '100%', 
                                            // Utiliser 'auto' pour que les articles s'ajustent dynamiquement 
                                            flex: '1', // Pour permettre à chaque élément de remplir l'espace disponible
                                            display: 'flex', // Ajout d'une flexbox pour aligner le contenu
                                            flexDirection: 'column', // Pour aligner le contenu verticalement
                                        }}> 
                                            <Typography variant="h3">WANTED</Typography>
                                            <img src={element?._links?.thumbnail?.href} alt={element?.entity_id + "-" + element?.name} style={{ width: '80%', height: '45%'}}/>
                                            <Typography>{element?.name} {element?.forename}</Typography>
                                            {element?.arrest_warrants && element?.arrest_warrants[0] && 
                                                <Typography>{element?.arrest_warrants[0]?.charge}</Typography>
                                            }
                                            <Button 
                                            onClick={() => more(element)}>
                                                + 
                                            </Button>
                                        </Paper>
                                    </Box>
                                ))}
                        </Carousel>
                    </Box>
                    {/* ANCHOR Infos Supplémentaires */}
                    {showMore && (
                        <Box key={"additional-info-" + current[0].entity_id} ref={newDivRef}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h2">WANTED</Typography>
                                    <img src={current[0]._links.thumbnail.href} alt="Current Criminel" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h3">Informations supplémentaires {current[0].name}</Typography>
                                    <Typography>{current[0].date_of_birth}</Typography>
                                    <Typography>{current[0].place_of_birth}</Typography>
                                    <Box>
                                        <Typography variant="h3">Charges :</Typography>
                                        <Typography>{current[0].arrest_warrants[0].charge}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h3">Identity</Typography>
                                        <Typography>Family name :</Typography>
                                        <Typography>{current[0]?.name}</Typography>
                                        <Typography>Forename :</Typography>
                                        <Typography>{current[0]?.forename}</Typography>
                                        <Typography>Gender :</Typography>
                                        <Typography>{current[0]?.sex_id}</Typography>
                                        <Typography>Date of birth :</Typography>
                                        <Typography>{current[0]?.date_of_birth}</Typography>
                                        <Typography>Place of birth :</Typography>
                                        <Typography>{current[0]?.place_of_birth}</Typography>
                                        <Typography>Nationality :</Typography>
                                        <Typography>{current[0]?.nationalities[0]}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h3">Physical Description :</Typography>
                                        <Typography>Distinguishing Marks :</Typography>
                                        <Typography>{current[0]?.distinguishing_marks}</Typography>
                                        <Typography>Eyes Colors :</Typography>
                                        <Typography>{current[0]?.eyes_colors_id}</Typography>
                                        <Typography>Hair Color :</Typography>
                                        {current && current[0]?.hairs_id && current[0]?.hairs_id.length > 0 ? (
                                            <Typography>{current[0]?.hairs_id[0]}</Typography>
                                        ) : (
                                            <Typography>Aucune information sur la couleur des cheveux disponible.</Typography>
                                        )}
                                        <Typography>Height</Typography>
                                        <Typography>{current[0]?.height}</Typography>
                                        <Typography>Weight</Typography>
                                        <Typography>{current[0]?.weight}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h3">Details</Typography>
                                        <Typography>Languages spoken</Typography>
                                        {current && current[0]?.languages_spoken_ids && current[0]?.languages_spoken_ids.length > 0 ? (
                                            <Typography>{current[0]?.languages_spoken_ids[0]}</Typography>
                                        ) : (
                                            <Typography>Aucune information sur les différentes parlées.</Typography>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                    {/* ANCHOR Boutton de retour au haut de la page */}
                    <Button onClick={() => clicked()}>CLICK</Button>
                </Box>
            </Box>
        </>
    )
}

// Export de la fonction List du composant List.jsx
export default List;