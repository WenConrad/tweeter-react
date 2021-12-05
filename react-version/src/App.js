import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main class="container">
        <TweetList />
        <TweetForm />
      </main>
    </div>
  );
}

export default App;