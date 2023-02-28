import '../../styles/search.css'
import Post from "./PostDatosExtras"
import { useState, useEffect } from "react"
import { getDatosExtra } from '../../api/axios';
import { skeletonGeneratorExtra } from '../../config/global/skeleton';

export default function GeneradoresList() {
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDatosExtra().then(json => {
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const length = searchResults.length - 1
    const from = length - 20
    const results = searchResults && searchResults.slice(from,length).map(post => <Post key={post.id} post={post}/>);
    const content = results ? results : <article><p>No Matching Posts</p></article>

    if (loading) return skeletonGeneratorExtra()

    return (
        <div className="main-container-generators">
            <h1>Datos extra:</h1>
            <table className="table-cls">
                <thead className='theadclass'>
                    <tr className='trclass'>
                        <th className='thclass'>rtp</th>
                        <th className='thclass'>rt1</th>
                        <th className='thclass'>rt2</th>
                        <th className='thclass'>rt3</th>
                        <th className='thclass'>rtplh</th>
                        <th className='thclass'>rt1lh</th>
                        <th className='thclass'>rt2lh</th>
                        <th className='thclass'>rt3lh</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}