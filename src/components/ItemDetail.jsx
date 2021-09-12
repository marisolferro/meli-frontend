//Styles: 
import '../scss/ItemDetail.scss';

//React: 
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Store: 
import { useSelector } from "react-redux";

//Components: 
import SearchHeader from '../components/SearchHeader';

//Services: 
import itemService from '../services/itemService'

//Component: 

const ItemDetail = () => {

  //Data: 
  let itemStore = useSelector((state) => state.itemReducer);

  const [ item, setItem ] = useState ( 
    {
      
      id: "",
      title: "",
      price: {
          currency: "",
          amount: 0,
          decimals: 0,
      },
      picture: "",
      condition: "",
      free_shipping: false,
      sold_quantity: 0,
      description: "",
    }
  );

  let { id } = useParams();

  useEffect(() => {

    const search = async () => {
      try{
          let response = await itemService.find(id);

          setItem( () => {
            return response.data.item;
          });

          
      }catch(error){
        console.log(error);
      }
    }
    search();

  });

  //JSX: 

  return (

    <Fragment >
      
      <SearchHeader />

      <main className="container">

        <div className="flex-container">
        {
            itemStore.categories.map((value, index) => {
              return <div className="body-text2" key={index}>
                        {( itemStore.categories.length -1 !== index ) && <span>{value+" >"} &nbsp;</span> }
                        {( itemStore.categories.length -1 === index ) && <span className="text-bold">{value}</span> }
                      </div>
            })
        }
        </div>

        <div className="row">
        
          <div className="side">
            <img className="img-item" src={item.picture} alt=""></img>
            <h3>Descripción del producto</h3>
            <div className="body-text2">{item.description}</div>
          </div>

          <div className="main">
            <p>
              <span>{( item.condition === "new" ) && "Nuevo " } </span>
              <span>{( item.condition !== "new" ) && "Usado " } </span>
              <span>-{" "+item.sold_quantity+" "} vendidos</span>
            </p>
            <h2>{item.title}</h2>
            <h1>
              <span>$ {new Intl.NumberFormat({style: "currency", currency: item.price.currency}).format(item.price.amount)} </span>
              <span className="body-text2">{item.price.decimals}</span> 
            </h1>
            
            <button className="buyButton">Comprar</button>
            
          </div>
        </div>

      </main>

    </Fragment>
  );
}

export default ItemDetail;