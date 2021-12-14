import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from "react"
import axios from "axios"
import PunkList from './components/PunkList';

function App() {
    const [punkListData, setPunkListData] = useState([])

    useEffect(() => {
      const  getMyNfts = async() => {
        const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x489F1f3090Db200864eF266fFbEc7f65538c6f94")
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
      }
      return getMyNfts();
    }, [])
  
  return (
    <div className='app' >
      <Header/>
     <CollectionCard  id={0} name={"Banda Punk"} traits={[{"value" : 7}]} image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu" /> 
     <PunkList punklistData={punkListData} />
      </div>
  );
}

export default App;
