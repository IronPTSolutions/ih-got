import Episode from "../episode/Episode"
import data from "../../data/episodes.json"

function EpisodesList(props) {
  const episodes = data.episodes

  return (
    <div className="container bg-light p-4">
      <h3>Episodes List</h3>

      <div className="row">
        {episodes
          .filter(episode => props.season === 'All' || episode.season === props.season)
          .map(episode => (
          <div className="col-3">
            <Episode
              image={episode.image.medium}
              title={episode.name}
              season={episode.season}
              episode={episode.number}
              summary={episode.summary}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EpisodesList