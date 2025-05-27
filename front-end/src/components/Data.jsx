import { useState, useEffect } from "react"

function Data() {

    const [data , setData ] = useState([])
    useEffect(() => {
        const FetchData = async() => {
            try {
                const response = await fetch("https://random-word-api.herokuapp.com/word?length=7&lang=fr");
                const data = await response.json();
                setData(data)
                console.log(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données : ", error);
            }
        };

        FetchData()
    }, [])
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Data
