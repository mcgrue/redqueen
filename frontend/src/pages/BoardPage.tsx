import { DnDemo } from '../components/DnDemo';

function BoardPage() {

  // usestate to keep track of the cards. clicking on them changes the boolean
  // if the card is face up or face down


  return (
    <div className="BoardPage">
      <header className="App-header">
        Board Game

        <div style={{ width: '100%', height: '100%' }}>
          <DnDemo />
        </div>

      </header>
    </div>
  );
}

export default BoardPage;