import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import Niveau1 from "/src/components/niveau1.json"
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';



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


    // Fonction permettant de revenir au top de la page ors du click sur le boutton assigné
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
            <div ref={newDivRef2}>
                <h1>Liste des Criminels recherchés par INTERPOL</h1>
                <div>
                    {/* ANCHOR Search Bar */}
                    <span id="searchBar">
                        <input 
                            type="text" 
                            placeholder="rechez le nom ici"
                            onChange={(e) => {searching(e)}}
                        />
                        <img src="#" alt="loupe"/>
                    </span>
                    {/* ANCHOR Carroussel */}
                    <div key={1} id="crimeContainer">
                        <Carousel
                            autoPlay={false}
                            animation="slide"
                            timeout={500}
                            indicators={false}
                            navButtonsAlwaysInvisible={false}
                        >
                            {CardsInfos.map((element) => (
                                <article key={element.entity_id} id={element.entity_id}>
                                    <h3>WANTED</h3>
                                    <img src={element?._links?.thumbnail?.href} alt={element?.entity_id + "-" + element?.name}/>
                                    <p>{element?.name} {element?.forename}</p>
                                    {element?.arrest_warrants && element?.arrest_warrants[0] && 
                                        <p>{element?.arrest_warrants[0]?.charge}</p>
                                    }
                                    <button onClick={() => more(element)}> + </button>
                                </article>
                            ))}
                        </Carousel>
                    </div>
                    {/* ANCHOR Infos Supplémentaires */}
                    {showMore && (
                        <div key={"additional-info-" + current[0].entity_id} ref={newDivRef}>
                            <div>
                                <h2>WANTED</h2>
                                <img src={current[0]._links.thumbnail.href} alt="" />
                            </div>
                            <div>
                                <h3>Informations supplémentaires {current[0].name}</h3>
                                <p>{current[0].date_of_birth}</p>
                                <p>{current[0].place_of_birth}</p>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        <h3>Charges :</h3>
                                        <p>{current[0].arrest_warrants[0].charge}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3>Identity</h3>
                                    <span>
                                        <p>Family name :</p>
                                        <p>{current[0]?.name}</p>
                                    </span>
                                    <span>
                                        <p>Forename :</p>
                                        <p>{current[0]?.forename}</p>
                                    </span>
                                    <span>
                                        <p>Gender :</p>
                                        <p>{current[0]?.sex_id}</p>
                                    </span>
                                    <span>
                                        <p>Date of birth :</p>
                                        <p>{current[0]?.date_of_birth}</p>
                                    </span>
                                    <span>
                                        <p>Place of birth :</p>
                                        <p>{current[0]?.place_of_birth}</p>
                                    </span>
                                    <span>
                                        <p>Nationality :</p>
                                        <p>{current[0]?.nationalities[0]}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3>Physical Description :</h3>
                                    <span>
                                        <p>Distinguishing Marks :</p>
                                        <p>{current[0]?.distinguishing_marks}</p>
                                    </span>
                                    <span>
                                        <p>Eyes Colors :</p>
                                        <p>{current[0]?.eyes_colors_id}</p>
                                    </span>
                                    <span>
                                        <p>Hair Color :</p>
                                        {current && current[0]?.hairs_id && current[0]?.hairs_id.length > 0 ? (
                                            <p>{current[0]?.hairs_id[0]}</p>
                                        ) : (
                                            <p>Aucune information sur la couleur des cheveux disponible.</p>
                                        )}
                                    </span>
                                    <span>
                                        <p>Height</p>
                                        <p>{current[0]?.height}</p>
                                    </span>
                                    <span>
                                        <p>Weight</p>
                                        <p>{current[0]?.weight}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3>Details</h3>
                                    <span>
                                        <p>Languages spoken</p>
                                        {current && current[0]?.languages_spoken_ids && current[0]?.languages_spoken_ids.length > 0 ? (
                                            <p>{current[0]?.languages_spoken_ids[0]}</p>
                                        ) : (
                                            <p>Aucune information sur les différentes parlées.</p>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* ANCHOR Boutton de retour au haut de la page */}
                    <button onClick={() => clicked()}>CLICK</button>
                </div>
            </div>
        </>
    )
}

// Export de la fonction List du composant List.jsx
export default List;