import { useParams } from "react-router-dom"

export default function Search() {

    const { title } = useParams() 

    return (
        <h1>Resultado da Pesquisa: '{title}'</h1>
    )
}