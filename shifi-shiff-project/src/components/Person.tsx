
import { useParams } from "react-router"

const Person = () => {

    const { name } = useParams()

    return (<>

        <h1>Person</h1>
        <h3>{name}</h3>
    </>)
}

export default Person

