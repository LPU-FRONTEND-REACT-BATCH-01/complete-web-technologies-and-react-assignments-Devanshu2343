import { useState , useEffect} from "react"

const FetchingData = () =>{

    const [data ,setData] = useState([]) ;
    const [loading , setLoading] = useState(true) ;

    useEffect(()=>{
        let fetchData= async ()=>{
            try{
                let res = await fetch("https://dummyjson.com/products");
               // console.log(res);
                
                if (res.ok){
                    let data = await res.json() ;
                    setData(data.products); 
                    setLoading(false);    
                }      
            }
            catch(error){
                console.log(error);
           
            }
        }
        fetchData();      

    },[]);
    console.log(data);
    setLoading(true);

    return(
        // <div>
        //   {data.map(product=> <Card key= {product.id} data={product} />)}
        // </div>
        <div>
            <h3>
                {data.title}
            </h3>
        </div>
    )

}

export default FetchingData ;
