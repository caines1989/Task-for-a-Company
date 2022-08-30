import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import columns from '../components/constants/TableColumns'
import StatisticsForm  from '../components/StatisticsForm'

const Home = () => {
    const [statistics, setStatistics] = useState([])

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
    <Box sx={{ height: 400, width: '56%', display: 'block', position: 'absolute' }}>
      <DataGrid
        rows={statistics}getRowId ={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    <Box sx={{ height: 400, width: '100%' }}>
      <StatisticsForm />
    </Box>
    </Box>
 
    )
}

export default Home
