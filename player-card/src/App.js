import './App.css';
import PlayersList from './Component/playerList';
import TextLinkExample  from './Component/navBar';


// rendered player cards with bootstrap navbar
function App() {
  return (
    <div className="App">

      < TextLinkExample />
      <h1>Super Eagles</h1>
      <p>The 2002 World Cup Competition, also called Korea/Japan 2002, kicked off with a match between the defending champions, France, and the Senegalese nation team from African. Nobody had given the Senegalese any chance against the star-studded defending champions but the 1-0 score line in favour of Senegal showed that African football can no longer be taken for granted. .
          This shocking defeat of France had raised Africa’s hopes of going beyond the first round of the tournament. So when the Super Eagles of Nigeria filed out against Argentina on the morning of Sunday, June the second, 2002, many Nigeria football enthusiasts delayed attending church service to watch the match live on television. As expected, the Super Eagles put up strong resistance to the Argentinian challenge and the day would not have ended on a sombre note for Nigerians if the momentum had been sustained throughout the match.</p>
      < PlayersList />
    </div>
  );
}


export default App

