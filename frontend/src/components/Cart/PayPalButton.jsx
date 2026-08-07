import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
           "BAAcCiymFcL_YCmVqg4cChpVO-y0K8tvKNvQrheQ1OoAuURAGWTRJOon3saq9n7lQLVKz1Vd6yOVR-qZtU",
      }}
    >
        <PayPalButton
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [{ amount: { value: amount } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess);
          }}
          onError={onError}
        />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
