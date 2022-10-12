const {FEEMODEL}=require('../lookup/fee_lookup')
const {SUBSCRPTIONMODEL}=require('../lookup/subscription_plan_lookup')

const calculatePlatformFee=(productCost,platform,subscription=null)=>{
    if(!platform){
        const error=new Error("please provide platform")
        error.statusCode=401
        throw error
    } 
    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.ETSY.PLATFORM)
    {
        const platform_cost=FEEMODEL.ETSY.LISTINGFEEAMOUNT+FEEMODEL.ETSY.OFFSITEADSFEE+
        FEEMODEL.ETSY.PAYMENTPROCESSINGFEEAMOUNT+(FEEMODEL.ETSY.PAYMENTPROCESSINGFEEPERCENT*productCost)+
        (FEEMODEL.ETSY.TRANSACTIONFEEPERCENT*productCost)
        return platform_cost
    }
    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.WOOCOMMERCE.PLATFORM)
    {
        const platform_cost=FEEMODEL.WOOCOMMERCE.TRANSACTIONFEEAMOUNT+Number(FEEMODEL.WOOCOMMERCE.TRANSACTIONFEEPERCENT*productCost)
        return platform_cost 
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.PRESTASHOP.PLATFORM)
    {
           const platform_cost=Number(FEEMODEL.PRESTASHOP.TRANSACTIONFEEPERCENT*productCost)
            return platform_cost
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.WEEBLY.PLATFORM)
    {
        const platform_cost=FEEMODEL.WEEBLY.TRANSACTIONFEEAMOUNT+Number(FEEMODEL.WEEBLY.TRANSACTIONFEEPERCENT*productCost)
        return platform_cost  
    }

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.EBAY.PLATFORM)
    {
        const platform_cost=FEEMODEL.EBAY.TRANSACTIONFEEAMOUNT+Number(FEEMODEL.EBAY.TRANSACTIONFEEPERCENT*productCost)
        return platform_cost 
    }

    if(!subscription){
        console.log("no sub")
        const error=new Error("please provide subscription type")
        error.statusCode=401
        throw error
    } 
    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.SHOPIFY.PLATFORM)
    {                   
        console.log(String(subscription).toLocaleLowerCase(),SUBSCRPTIONMODEL.SHOPIFY.SUBSCRIPTION.ADVANCED)

                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SHOPIFY.SUBSCRIPTION.BASIC)
                {
                    const platform_cost=FEEMODEL.SHOPIFY.BASICAMOUNT+Number(FEEMODEL.SHOPIFY.BASICPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SHOPIFY.SUBSCRIPTION.PLUS)
                {
                    const platform_cost=FEEMODEL.SHOPIFY.PLUSAMOUNT+Number(FEEMODEL.SHOPIFY.PLUSPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SHOPIFY.SUBSCRIPTION.ADVANCED)
                {
                    const platform_cost=FEEMODEL.SHOPIFY.ADVANCEDAMOUNT+Number(FEEMODEL.SHOPIFY.ADVANCEDPERCENT*productCost)
                    console.log(FEEMODEL.SHOPIFY.ADVANCEDAMOUNT)
                    console.log("in")
                    return platform_cost
                }
                else{
                        const error=new Error("can't find matching subscription type")
                        error.statusCode=401
                        throw error
                }
        
    } 
    
    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCOMMERCE.PLATFORM)
    {
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCOMMERCE.SUBSCRIPTION.STANDARD)
                {
                    const platform_cost=FEEMODEL.BIGCOMMERCE.STANDARDAMOUNT+Number(FEEMODEL.BIGCOMMERCE.STANDARDPERCENT*productCost)
                    return platform_cost 
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCOMMERCE.SUBSCRIPTION.PROAMOUNT)
                {
                    const platform_cost=FEEMODEL.BIGCOMMERCE.PROAMOUNT+Number(FEEMODEL.BIGCOMMERCE.PROAMOUNT*productCost)
                    return platform_cost 
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCOMMERCE.SUBSCRIPTION.PLUSAMOUNT)
                {
                    const platform_cost=FEEMODEL.BIGCOMMERCE.PLUSAMOUNT+Number(FEEMODEL.BIGCOMMERCE.PLUSPERCENT*productCost)
                    return platform_cost
                } 
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCOMMERCE.SUBSCRIPTION.ENTERPRISEAMOUNT)
                {
                    const platform_cost=FEEMODEL.BIGCOMMERCE.ENTERPRISEAMOUNT+Number(FEEMODEL.BIGCOMMERCE.ENTERPRISEPERCENT*productCost)
                    return platform_cost
                }
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.SQUARESPACE.PLATFORM)
    {
               if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SQUARESPACE.SUBSCRIPTION.BASIC)
                {
                    const platform_cost=Number(FEEMODEL.SQUARESPACE.BASICFEEERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SQUARESPACE.SUBSCRIPTION.BUSINESS)
                {
                    const platform_cost=Number(FEEMODEL.SQUARESPACE.BASICFEEERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.SQUARESPACE.SUBSCRIPTION.ADVANCED)
                {
                    const platform_cost=Number(FEEMODEL.SQUARESPACE.ADVANCEDFEEERCENT*productCost)
                    return platform_cost
                }
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
    } 

   
    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.FASTSPRING.PLATFORM)
    {
               if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.FASTSPRING.SUBSCRIPTION.OPTION1)
                {
                    const platform_cost=Number(FEEMODEL.FASTSPRING.OPTION1PERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.FASTSPRING.SUBSCRIPTION.OPTION2)
                {
                    const platform_cost=FEEMODEL.FASTSPRING.OPTION2AMOUNT+Number(FEEMODEL.FASTSPRING.OPTION1PERCENT*productCost)
                    return platform_cost
                }
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
                
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCARTEL.PLATFORM)
    {
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCARTEL.SUBSCRIPTION.PAYPAL)
                {
                    const platform_cost=FEEMODEL.BIGCARTEL.PAYPALAMOUNT+Number(FEEMODEL.BIGCARTEL.PAYPALPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.BIGCARTEL.SUBSCRIPTION.STRIP)
                {
                    const platform_cost=FEEMODEL.BIGCARTEL.STRIPEAMOUNT+Number(FEEMODEL.BIGCARTEL.STRIPEPERCENT*productCost)
                    return platform_cost
                } 
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.WIX.PLATFORM)
    {
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.WIX.SUBSCRIPTION.CANADA)
                {
                    const platform_cost=FEEMODEL.WIX.CANADAAMOUNT+Number(FEEMODEL.WIX.CANADAPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.WIX.SUBSCRIPTION.USA)
                {
                    const platform_cost=FEEMODEL.WIX.USAPEAMOUNT+Number(FEEMODEL.WIX.USAPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.WIX.SUBSCRIPTION.EUROPE)
                {
                    const platform_cost=FEEMODEL.WIX.EUROPEAMOUNT+Number(FEEMODEL.WIX.EUROPEPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.WIX.SUBSCRIPTION.UK)
                {
                    const platform_cost=FEEMODEL.WIX.UKAMOUNT+Number(FEEMODEL.WIX.UKPERCENT*productCost)
                    return platform_cost
                }
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
    } 

    if(String(platform).toLocaleLowerCase()==SUBSCRPTIONMODEL.VOLUSION.PLATFORM)
    {
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.VOLUSION.SUBSCRIPTION.PERSONAL)
                {
                    const platform_cost=Number(FEEMODEL.VOLUSION.PERSONALPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.VOLUSION.SUBSCRIPTION.BUSINESS)
                {
                    const platform_cost=Number(FEEMODEL.VOLUSION.BUSINESSPERCENT*productCost)
                    return platform_cost
                }
                if(String(subscription).toLocaleLowerCase()==SUBSCRPTIONMODEL.VOLUSION.SUBSCRIPTION.PROFESSIONAL)
                {
                    const platform_cost=Number(FEEMODEL.VOLUSION.PROFESSIONALPERCENT*productCost)
                    return platform_cost
                } 
                else{
                    const error=new Error("can't find matching subscription type")
                    error.statusCode=401
                    throw error
            }
    } 
    else{
        const error=new Error("can't find matching platform type")
        error.statusCode=401
        throw error
}
    return
}

module.exports={
    calculatePlatformFee
}