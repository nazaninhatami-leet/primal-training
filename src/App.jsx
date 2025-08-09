import Header from './components/header';
import Title from './components/title';
import Committed from './components/committed';

function App() {
  return (
    <>
      <Header />
      <Title />
      <Committed />
      <div className='h-1000 bg-indigo-500'></div>
    </>
  );
}

export default App;
