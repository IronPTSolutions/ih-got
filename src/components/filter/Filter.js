function Filter(props) {
  const seasons = ['All', 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="container mb-4">
      <h6>Filter season</h6>
      <div className="btn-group" role="group">
      {seasons.map(season => (
        <button
          onClick={() => { props.onFilter(season) }}
          className="btn btn-secondary"
        >
          {season}
        </button>
      ))}
      </div>
    </div>
  )
}

export default Filter