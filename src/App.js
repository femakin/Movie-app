
import './App.css';
import MoviesList from './components/MoviesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div id="app">
<h1>Movie Search App</h1>

<MoviesList/>

      <footer>
	<p>
		Created with <FontAwesomeIcon icon={faHeart} /> by
		<a target="_blank" href="https://femi-akinyemi.netlify.app" rel="noreferrer">Femi Akinyemi</a>
		{/* - Read
		<a target="_blank" rel="noreferrer" href="https://www.florin-pop.com/blog/2019/02/react-movie-search-app/">how I created it</a>
		- Other projects on
		<a target="_blank" rel="noreferrer" href="https://github.com/florinpop17/work-journal/">
			Github
		</a> */}
	</p>
</footer>
    </div>
  );
}

export default App;
