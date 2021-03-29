import logo from './images/prettycite_logo.png';
import Search from './Search';

function App() {
  return (
    <div className="App bg-primarybg h-screen">
      <header className="App-header flex flex-col justify-center items-center">
        <img src={logo} className="w-1/3 max-w-40 md:max-w-xs mt-12" alt="logo" />
        <h3 className="text-secondarybg font-light text-xl md:text-3xl mt-10">
          citation. made easy.
        </h3>
        <Search/>
      </header>


      <div className="absolute bottom-0 w-full text-sm flex justify-center">
        <a href="https://github.com/lucastanger/prettycite" target="_blank" rel="noreferrer" className="text-primary">prettycite&nbsp;</a> 
        created with&nbsp;<span className="text-secondary">&hearts;</span>&nbsp;by 
        <a href="https://github.com/lucastanger" target="_blank" rel="noreferrer" className="text-primary">&nbsp;lucastanger</a>
      </div>
    </div>
  );
}

export default App;
