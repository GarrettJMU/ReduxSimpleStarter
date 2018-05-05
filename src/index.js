import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyD6HahnkYPjZKEl2kNPlSC0-J7FS5RJupc'

const App = () => {
  return <div>
            <SearchBar/>
        </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
