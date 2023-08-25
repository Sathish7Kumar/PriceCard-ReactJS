import React from 'react';
 
function Cardplan({plan,features}){
    const handleBuyClick = () => {
        alert(`YOU ARE SELECTED "${plan.plan}" SUBSCRIPTION PLAN COST - $ ${plan.fee} per MONTH`);
      };
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-10">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
                    <h6 className="card-price text-center">$ {plan.fee}<span className="period">/Month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            {
                                plan.plan !== "FREE" ? <strong>{plan.user}</strong> : plan.user
                            }
                        </li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{plan.storage}</li>
                        {
                            features.map((feature,index) => {
                                return <React.Fragment key = {index} >
                                    {
                                        plan.feature_flags[index] !== 0 
                                        ?
                                        <li>
                                            <span className="fa-li"><i className="fas fa-check"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                                <><strong>Unlimited</strong> {feature} </>:  feature
                                            }
                                        </li> 
                                        :
                                        <li className="text-muted">
                                            <span className="fa-li"><i className="fas fa-times"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                            <><strong>Unlimited</strong> {feature} </> :  feature
                                            }
                                        </li>
                                    }
                                </React.Fragment>
                            })
                        }
                    </ul>
                    <button onClick={handleBuyClick} className="btn btn-block btn-success">BUTTON</button>
                </div>
            </div>
        </div>
    )
}
export default Cardplan
