import { useEffect, useState } from "react";

const useGeoLocate = () => {
    const [locate, setLocate] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" }
        });

        const onSuccess = locate => {
            setLocate({
                loaded: true,
                coordinates: { 
                    lat: locate.coords.latitude, 
                    lng: locate.coords.longitude,
                },
            });
        };
        
        const onError = error => {
            setLocate({
                loaded: true,
                error,
            });
        }

        useEffect(() => {
            if (!("geolocation" in navigator)) {
                onError({
                    code: 0,
                    message: "Geolocation is not supported by this browser",
                });
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }, [])

    return locate;
}

export default useGeoLocate;