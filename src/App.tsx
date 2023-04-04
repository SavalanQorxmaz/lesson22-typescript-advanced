import axios from "axios";
import Card from "./components/Card";
import { IProduct } from "./model";
import { useEffect, useState } from "react";




const URL = `https://fakestoreapi.com/products`






function App() {
 
  const [data, setData] = useState<IProduct[]>([])
  const [dataIsReady, setDataIsReady] = useState(false)

  const getData = async () => {

    const products = await axios(URL)
    .then(res=>res.data)
  setDataIsReady(true)
    setData(products)
   
  }

  const getDataWithPromise = ()=> {
    return new Promise((resolve, reject)=>{
      resolve(
        axios(URL)
    .then(res=>res.data)
    .then(res=>{

      setData(res)
      return res
    })
      )
    })
  }

useEffect(()=>{
  getDataWithPromise()
  .then(res=>{
    return res
  })
  .then(res=>{
    setDataIsReady(true)
    console.log(res)
    return res
  })
},[])

  // useEffect(()=>{
  //   getData()
    
  //  console.log(data)
  // }, [dataIsReady])

  return (
    <div className="App">


   <div className="w-4/5 m-auto flex flex-col items-center  content-center ">
   {
      dataIsReady? 
      data.map(item=>(
        <Card key={item.id} data = {item}/>
      )): <div>Loading...</div>
    }
   </div>

    </div>
  );
}

export default App;
