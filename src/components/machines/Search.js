import '../../styles/search.css'
import SearchBar from './SearchBar'
import Post from './Post';
import { useState, useEffect } from 'react';
import getPosts from '../../api/axios';

export default function Search() {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
    getPosts().then(json => {
        setPosts(json)
        setSearchResults(json)
        setLoading(false)
    })
    }, [])


    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post} />);
    const content = results ? results : <article><p>No Matching Posts</p></article>
    console.log(results)
    if (loading) return <h1>LOADING...</h1>
   
    return (
        <div className="main-container">
            <div className="div-fecha">
                <SearchBar posts={posts} setSearchResults={setSearchResults} />
            </div>
            <table className="table-cls">
                <thead className='theadclass'>
                        <tr className='trclass'>
                            <th className='thclass'>Numero de operacion</th>
                            <th className='thclass'>Codigo del producto</th>
                            <th className='thclass'>Numero de Inyectora</th>
                            <th className='thclass'>Numero de Molde</th>
                            <th className='thclass'>Tiempo de ciclo</th>
                            <th className='thclass'>Materia Prima</th>
                        </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}