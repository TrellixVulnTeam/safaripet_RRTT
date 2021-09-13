import React, {useState, useEffect}  from 'react';
import Helmet from 'react-helmet';
import {IMG} from "../config";
import Menu from './Menu';
import Footer from './Footer';
import {getBreedersPage} from "./apiCore";

const Breeders = () => {

    const [getBreedersContent, setAllBreedersContent] = useState([]);

    const loadAllBreedersContent = () => {
        getBreedersPage().then(data => {
              if(data.error){
                  console.log(data.error)
              } else{
                setAllBreedersContent(data)
                //console.log(data.data)
              }
          });
      };
  
      useEffect(() =>{
        loadAllBreedersContent();
      }, [])


    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Breeders - Safari Pet Center</title>
            </Helmet>
            <Menu/>
            {/* {JSON.stringify(getBreedersContent)} */}

            {getBreedersContent.map((p, i) => (
                <div>
                <div className="slider_area">
                    <div className="single_slider about_bg_1 d-flex align-items-center" style={{background: `url(${IMG+p.banner})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider_text">
                                    
                                        <h3>{p.banner_text}</h3>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                dangerouslySetInnerHTML={{
                    __html: p.description
                }}></div>
            </div>
            ))}
            
            <Footer/>
        </div>        
    )
}

export default Breeders;