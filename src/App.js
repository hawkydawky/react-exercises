import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { GithubUserList } from './GithubUserList';
import { Githubuser } from './GithubUser';

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="counter">Counter</Link> | <Link to="users/">Github</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Welcome name="Bernard" />} />
        <Route path='counter' element={<Counter />} />
        <Route path='users/' element={<GithubUserList />} />
        <Route path='users/:username' element={<Githubuser />} />
        <Route path='*' element={<h4>Page does not exists!</h4>} />
      </Routes>
    </div>
  );
}
