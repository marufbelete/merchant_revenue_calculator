const { calculatePlatformFee} = require("../helpers/platform_fee")

exports.merchantCost=async (req, res, next) => {
  try {
    const {productCost,shippingCost,platform,subscription}=req.query
    const platform_fee=calculatePlatformFee(productCost,platform,subscription)
    const total_merchant_cost=Number(productCost)+(shippingCost)+platform_fee
    return res.json(total_merchant_cost)

  }
catch(error) {
  console.log(error)
     next(error)
}
}

exports.customerCost=async (req, res, next) => {
    try {
      const {customerCost,shippingCost,couponDiscount}=req.query
      const discount_amount=Number(customerCost)*(Number(couponDiscount)/100)
      const total_customer_cost=Number(customerCost)+Number(shippingCost)-discount_amount
      return res.json(total_customer_cost)
    }
  catch(error) {
    console.log(error)
       next(error)
  }
}

exports.revenueInfo=async (req, res, next) => {
  try {
    const {productCost,shippingCost,platform,subscription,couponDiscount,customerCost}=req.query
    const discount_amount=Number(customerCost)*(Number(couponDiscount)/100)
    const total_customer_cost=Number(customerCost)+Number(shippingCost)-discount_amount
    const platform_fee=calculatePlatformFee(Number(productCost),platform,subscription)
    const total_merchant_cost=Number(productCost)+Number(shippingCost)+platform_fee
    const price=Number(productCost)+Number(shippingCost)
    const estimatedProfit=Number(total_customer_cost)-Number(total_merchant_cost)
    const estimatedMargin=Number(estimatedProfit/total_customer_cost)*100
    const totalFee=platform_fee
    const info={
      price:price.toFixed(2),
      totalCost:total_merchant_cost.toFixed(2),
      totalFee:totalFee.toFixed(2),
      estimatedProfit:estimatedProfit.toFixed(2),
      estimatedMargin:estimatedMargin.toFixed(2)
    }
    return res.json(info)

  }
catch(error) {
  console.log("handle error")
     next(error)
}
}
