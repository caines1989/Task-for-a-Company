import { useState } from 'react'
import {
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const StatisticsForm = () => {
    const [title, setTitle] = useState('')
    const [views, setViews] = useState('')
    const [clicks, setClick] = useState('')
    const [cost, setCost] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()

      const statistics = {title, views, clicks, cost}

      const response = await fetch('/api/statistics' , {
        method: 'POST',
        body: JSON.stringify(statistics),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok){
        setError(json.error)
      }
      if (response.ok){
        setError(null)
        setTitle('')
        setViews('')
        setClick('')
        setCost('')
        console.log('new stat added', json)
      }
    }

  return (
  <div className="statisticsForm">
    <Typography variant="h5">Add a new stat here</Typography>
    <form className="create" onSubmit={handleSubmit}>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        label="Views"
        variant="outlined"
        onChange={(e) => setViews(e.target.value)}
        value={views}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        label="Clicks"
        variant="outlined"
        onChange={(e) => setClick(e.target.value)}
        value={clicks}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="number"
        label="Cost"
        variant="outlined"
        onChange={(e) => setCost(e.target.value)}
        value={cost}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        save
      </Button>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
  )
}

export default StatisticsForm