import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className='app' >
      <Header/>
     <CollectionCard  id={0} name={"Banda Punk"} traits={[{"value" : 7}]} image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu" /> 
      </div>
  );
}

export default App;
