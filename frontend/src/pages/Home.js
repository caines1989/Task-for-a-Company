import {useEffect, useState} from 'react'

import StatisticsDetails from '../components/StatisticsDetails'

const Home = () => {
    const [statistics, setStatistics] = useState(null)

    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch('/api/statistics')
            const json = await response.json()

            if (response.ok) {
                setStatistics(json)
            }
        }
        
        fetchStatistics()
    }, [])

    return (
        <div className="home">
            <div className="statistics">
               {statistics && statistics.map((statistics) => (
                <StatisticsDetails key={statistics._id} statistics={statistics} />
               ))} 
            </div>
        </div>
    )
}

export default Home