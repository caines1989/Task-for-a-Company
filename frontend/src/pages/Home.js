import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import columns from '../components/constants/TableColumns'
import StatisticsForm  from '../components/StatisticsForm'
import { useStatistics } from '../providers/StatisticsProvider'

const Home = () => {
    const {statistics } = useStatistics();

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
