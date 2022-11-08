import { useRouter } from 'next/router'
import useIsMounted from '../../hooks/useIsMounted'

const PruebaDinamica = () => {
    const isMounted = useIsMounted()
    const router = useRouter()
    if(!isMounted) {
        return null
    }

    console.log((router), router.query.id)
    return (
        <div>
            <p>Prueba dinamica</p>
        </div>
    )
}

export default PruebaDinamica