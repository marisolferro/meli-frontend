import logo from '../assets/Logo_ML@2x.png';
import icSearch from '../assets/ic_Search.png';

//Styles: 
import '../scss/SearchHeader.scss';

//React:
import { Fragment, useRef } from "react";
import { useHistory } from 'react-router-dom';

//Store: 
import { useDispatch } from "react-redux";
import { setItems, setCategories } from "../redux/actions/itemActions";

//Services: 
import itemService from '../services/itemService'


//Component: 

const ItemsSearch = () => {

  //Data: 
  const dispatch = useDispatch();
  const history = useHistory();

  //Ref: 
  const filter = useRef();

  //Methods: 
  const search = async () => {

    const filterValue = filter.current.value; 

    try{
        
        let response = await itemService.list(filterValue);

        //Store data:
        dispatch(setCategories(response.data.categories));
        dispatch(setItems(response.data.items));
        history.push('/items')
        

    }catch(error){
      console.log(error);
    }
  };

  //JSX: 
  return (
    <Fragment>

      <header className="header container">

        <div className="logo-container">
          <img src={logo} className="logo" alt=""/>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Nunca dejes de buscar" name="search" ref={filter}/>
          <button type="submit" onClick={search}>
            <img src={icSearch} className="imgSearch" alt=""/>
          </button>
        </div>

      </header>

    </Fragment>
  );
}

export default ItemsSearch;

