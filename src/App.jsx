import Header from './components/header';
import Title from './components/title';
import Committed from './components/committed';
import Section2 from './components/section2';
import Title2 from './components/title2';
import Discover from './components/discover';

function App() {
  return (
    <>
      <Header />
      <Title />
      <Committed />
      <Section2 />
      <Title2 />
      <Discover />
      <div className="h-1000 bg-indigo-500"></div>
    </>
  );
}

export default App;
