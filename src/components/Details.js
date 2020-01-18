import  React , { Component }from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

class Details extends Component{
  render(){
    return(<ProductConsumer>
      {(value)=>{
        const {id,company,img,info,price,title,inCart}=value.details;
        return(
          <div className="container py-5">
            {/* title*/}
            <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            </div>
            </div>
            {/* Endtitle*/}
            {/* Product info*/}
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} className="img-fluid" alt="product"/>
            </div>
            {/* Image text*/}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model:{title}</h2>
            <h4 className="text-uppercase text-muted text-title mt-3 mb-2">
            made by:<span className="text-uppercase">{company}</span>
            </h4>
            <h3 className="text-blue">
            <strong>price:
              <span>$</span>
              {price}
            </strong>
            </h3>
            <p className="font-weight-bold text-capitalize mb-0 mt-3">
            some info about product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/*Button*/}
            <div>
              <Link to="/">
              <ButtonContainer>
                Back to products
              </ButtonContainer>
              <ButtonContainer
                 cart
                 disabled={inCart?true:false}
                 onClick={
                ()=>
                {
                  value.addToCart(id);
                 value.openModal(id);
                }
                }>
                 {inCart?"inCart":"Add to cart"}

              </ButtonContainer>
              </Link>
            </div>
            </div>
            </div>
          </div>
        )
      }
      }
    </ProductConsumer>);
  }
}

export default Details;
