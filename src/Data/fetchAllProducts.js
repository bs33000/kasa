import accomodationData from "../Data/accomodation/logements.json";

/** to be replaced by async function below when connecte to an API */
export default function fetchAllProducts(){
    return (accomodationData);
}


/* fetch all products from API */
/*
async function fetchAllProducts() {
    try {
        const url = `http://localhost:3000/api/products`;
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (err) {
        alert (`Erreur       : ${err}  \n- veuillez vérifier l'API -`);
        return null;
    }
}
*/