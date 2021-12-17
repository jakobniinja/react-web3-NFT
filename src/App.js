import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from "react"
import axios from "axios"
import PunkList from './components/PunkList';
import Main from "./components/Main"
import PunkList2 from './components/PunkList2';

function App() {
    const [punkListData, setPunkListData] = useState([])
    const [punkListData2, setPunkListData2] = useState([])
    const [punkListData3, setPunkListData3] = useState([])
    const [selectedPunk, setselectedPunk] = useState(0)

    useEffect(() => {
      const  getMyNfts = async() => {
        const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x4688D81D1Af68AA4fbbFcAc66F97fe25dC86aB9A")
      setPunkListData(openSeaData.data.assets)
      }
      return getMyNfts();
    }, [])
  

    useEffect(() => {
      const  getMyNfts = async() => {
        const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8d8b28412DF6a2D13B45B6D0D85D429776792bD7")
      setPunkListData2(openSeaData.data.assets)
      }
      return getMyNfts();
    }, [])
    useEffect(() => {
      const  getMyNfts = async() => {
        const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xd9b831a4669d87D353966859fc83B777E94Ccb94")
      console.log(openSeaData.data.assets)
      setPunkListData3(openSeaData.data.assets)
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
          <PunkList2 punklistData={punkListData2}  />
          <PunkList2 punklistData={punkListData3}  />
          </>
     
     )
      }
      </div>
  );
}

export default App;
