import { Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { Githubuser } from './GithubUser';

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="counter">Counter</Link> | <Link to="users/hawkydawky">Github</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Welcome name="Bernard" />} />
        <Route path='counter' element={<Counter />} />
        <Route path='users/:username' element={<Githubuser />} />
      </Routes>
    </div>
  );
}
