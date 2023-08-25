import React from "react";
import {plans,features} from './Carddata'
import Cardplan from './Cardplan';

function Pricecard(){

  return (
    <div className="container">
      <div className="row">
        {
          plans.map((plan,index)=>{
            return <Cardplan key={index} plan = {plan} features={features}/>
          })
        }
      </div>
    </div>
  )
}


export default Pricecard;