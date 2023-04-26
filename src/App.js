import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { Githubuser } from './GithubUser';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name="Bernard" />} />
        <Route path='counter' element={<Counter />} />
        <Route path='users/:username' element={<Githubuser />} />
      </Routes>
    </div>
  );
}
