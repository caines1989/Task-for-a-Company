const StatisticsDetails = ({ statistics }) => {
    return (
        <div className="statistics-details">
            <h4>{statistics.title}</h4>
            <p><strong>Views: </strong>{statistics.views}</p>
            <p><strong>Clicks: </strong>{statistics.clicks}</p>
            <p><strong>Cost: </strong>{statistics.cost}</p>
            <p><strong>Date: </strong>{statistics.createdAt}</p>
        </div>
    )
}

export default StatisticsDetails