import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from "react"
import axios from "axios"
import PunkList from './components/PunkList';
import Main from "./components/Main"

function App() {
    const [punkListData, setPunkListData] = useState([])
    const [selectedPunk, setselectedPunk] = useState(0)

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
      {
        punkListData.length > 0 &&(
          <>
          
     <Main selectedPunk={selectedPunk} punkListData={punkListData} />
        
     <PunkList punklistData={punkListData} setselectedPunk={setselectedPunk} />
          </>
     
     )
      }
      </div>
  );
}

export default App;
