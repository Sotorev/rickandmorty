import { getCharacters } from '../data'
import { useLoaderData, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export async function loader() {
  const characters = await getCharacters(1);
  return characters;
}

function App() {
  // const characters = useLoaderData();
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
