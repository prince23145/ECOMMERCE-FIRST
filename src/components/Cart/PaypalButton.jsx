import React from 'react'
import {PayPalButtons,PayPalScriptProvider} from "@paypal/react-paypal-js"
export default function PaypalButton( {amount,onSuccess,onError}) {

  return (<PayPalScriptProvider options={{"client-id":"AReflgeZ7EBQPBlHQFyvT2siJCUAr4qF7gHEMe2eU1g53S5c1q08-QL-8dSDdNvn3LhPfJcgXIK-SpZy",currency:"USD"}}>
<PayPalButtons style={{layout:"vertical"}}
createOrder={(data,actions)=>{
    return actions.order.create(
        {
            purchase_units:[{
                amount:{currency_code:"USD",value:amount.toString(),},},],
        })
}}
onApprove={(data,actions)=>{
    return actions.order.capture().then(onSuccess)
}}
onError={onError}/>

  </PayPalScriptProvider>
  )
}
