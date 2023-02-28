import '../../styles/search.css'
import Post from "./PostGenerator"
import { useState, useEffect } from "react"
import { getGenerator2 } from '../../api/axios';
import { skeletonGenerators } from '../../config/global/skeleton';

export default function GeneradoresList() {
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGenerator2().then(json => {
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const length = searchResults.length - 1
    const from = length - 20
    const results = searchResults && searchResults.slice(from,length).map(post => <Post key={post.id} post={post}/>);
    const content = results ? results : <article><p>No Matching Posts</p></article>

    if (loading) return skeletonGenerators()

    return (
        <div className="main-container-generators">
            <h1>Genarador N°2:</h1>
            <table className="table-cls">
                <thead className='theadclass'>
                    <tr className='trclass'>
                        <th className='thclass'>Battery Voltage</th>
                        <th className='thclass'>Engine Oil Pressure</th>
                        <th className='thclass'>Engine Coolant Temperature</th>
                        <th className='thclass'>Engine Run Time</th>
                        <th className='thclass'>Engine kW/Hours</th>
                        <th className='thclass'>Engine RPM</th>
                        <th className='thclass'>Phase A/B Volts</th>
                        <th className='thclass'>Phase B/C Volts</th>
                        <th className='thclass'>Phase C/A Volts</th>
                        <th className='thclass'>Total kW</th>
                        <th className='thclass'>Total kVA</th>
                        <th className='thclass'>Genarator Power Factor</th>
                        <th className='thclass'>Phase A kVAr</th>
                        <th className='thclass'>Phase B kVAr</th>
                        <th className='thclass'>Phase C kVAr</th>
                        <th className='thclass'>Total kVAr</th>
                        <th className='thclass'>Bus Output Frequency</th>
                        <th className='thclass'>Generator Output Frequency</th>
                        <th className='thclass'>Network Address</th>
                        <th className='thclass'>SYNC TIMEOUT Action</th>
                        <th className='thclass'>Phase A/Neutral Volts</th>
                        <th className='thclass'>Phase B/Neutral Volts</th>
                        <th className='thclass'>Phase C/Neutral Volts</th>
                        <th className='thclass'>Mains/Bus Phase A/Neutral Volts</th>
                        <th className='thclass'>Phase A Current</th>
                        <th className='thclass'>Phase B Current</th>
                        <th className='thclass'>Phase C Current</th>
                        <th className='thclass'>Phase A kVA</th>
                        <th className='thclass'>Phase B kVA</th>
                        <th className='thclass'>Phase C kVA</th>
                        <th className='thclass'>Voltage Bias Analog Output</th>
                        <th className='thclass'>Speed Bias Analog Output</th>
                        <th className='thclass'>Load Control Mode</th>
                        <th className='thclass'>Synchronizer Mode</th>
                        <th className='thclass'>Number Of Unacknowledged Alarms</th>
                        <th className='thclass'>Unit Network Priority</th>
                        <th className='thclass'>Current Master Unit</th>
                        <th className='thclass'>Engine Status</th>
                        <th className='thclass'>Synchroscope</th>
                        <th className='thclass'>Charge Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}