import Header from './components/header';
import Title from './components/title';
import Committed from './components/committed';
import Section2 from './components/section2';

function App() {
  return (
    <>
      <Header />
      <Title />
      <Committed />
      <Section2 />
      <div className="h-1000 bg-indigo-500"></div>
    </>
  );
}

export default App;
