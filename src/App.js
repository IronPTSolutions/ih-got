import React from 'react'
import './App.css';
import Banner from './components/banner/Banner';
import EpisodesList from './components/episodes-list/EpisodesList';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';

class App extends React.Component {
  state = {
    season: 5
  }

  filter = (season) => {
    this.setState({ season })
  }

  render() {
    return (
      <div className="App">
        <Header title="Game of Thrones"/>
        <Banner/>
        <Filter onFilter={this.filter}/>
        <EpisodesList season={this.state.season}/>
      </div>
    );
  }
}

export default App;
