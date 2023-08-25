const plans =[
    {
    plan : "FREE",
    fee : 0,
    timePeriod : "No Validity",
    user : "Single User",
    storage : "5GB Storage",
    feature_flags : [1,1,0,0,0,0],
    },
    {
        plan : "PLUS",
        fee : 69,
        user : "5 Users",
        timePeriod : "month",
        storage : "50GB Storage",
        feature_flags : [1,1,1,1,1,0],
    },
    {
        plan : "PRO",
        fee : 499,
        user : "Unlimited Users",
        storage : "150GB Storage",
        feature_flags : [1,1,1,1,1,1]
    },
]

const features = ["Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]

export {plans,features}
