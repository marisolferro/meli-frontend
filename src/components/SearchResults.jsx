import shipping from '../assets/ic_shipping.png';

//Styles: 
import '../scss/SearchResults.scss';

//React: 
import { Fragment } from "react";
import { useHistory } from 'react-router-dom';

//Store: 
import { useSelector } from "react-redux";

//Components: 
import SearchHeader from '../components/SearchHeader';


//Component: 

const SearchResults = () => {

  //Data: 
  let itemStore = useSelector((state) => state.itemReducer);
  const history = useHistory();

  //JSX: 

  return (
    <Fragment>

      <SearchHeader />

      <main className="main container">
        
        {/*Categories: */}
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

        {/*Items List: */}
        <div className="items">
          {
            itemStore.items.map((value, index) => {

               return <div>
                        <div className="item-container" onClick={() => history.push('/items/'+value.id)}>

                          <div className="detail-container">
                              <img className="img-item" src={value.picture} alt=""/>
                              <div className="description">
                                <h4>
                                  
                                  <span>$ {new Intl.NumberFormat({style: "currency", currency: value.price.currency}).format(value.price.amount)} </span>
                                  
                                  {( value.free_shipping ) && <span><img src={shipping} alt=""/></span> }
                                  
                                </h4>
                                <div className="title">{value.title}</div>
                              </div>
                          </div>
                  
                          <div className="address-container">
                              <span>{value.address}</span>
                          </div>
                        </div>
                        <hr/>
                      </div>

            })
          }
        </div>


      </main>



    </Fragment>
  );
}

export default SearchResults;