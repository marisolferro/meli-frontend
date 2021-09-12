import React from 'react';
import ReactDOM from 'react-dom';

//Store
import store from "./redux/store";
import { Provider } from "react-redux";

//SCSS
import './scss/styles.scss';

//Components: 
import App from './App';

//SEO
//Se confira el SEO para cada componente con los TAGS correspondientes:
import { ReactSEOMetaTags } from 'react-seo-meta-tags'

ReactDOM.render(
  <React.StrictMode>

      <ReactSEOMetaTags
        website={
          { 
            url: 'https://mercadolibre.com',
            title:  'Buscador mercado libre',
            datePublished: '2019-10-06T13:56:03.123Z',
            description: 'Descripción Mercado Libre',
            language: 'en-US',
            author: {
              email: 'user@mercadolibre.com',
              name: 'Marisol Ferro',
            },
            site: {
              siteName: 'IMDb',
              searchUrl: 'https://www.mercadolibre.com/search?q=',
            }
          }
        
        }
        organization={{
          name: 'Mercado Libre',
          legalName: 'Mercado Libre',
          url: 'https://mercadolibre.com',
          logo: 'https://mercadolibre.com/logo.jpg'
        }}
        facebook={{ facebookAppId: 'mercadolibre' }}
        twitter={{ twitterUser: '@mercadolibre' }}
      />

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

