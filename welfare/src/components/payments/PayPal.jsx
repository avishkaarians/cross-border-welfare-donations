import React, { useRef, useEffect } from "react";
import BlockchainPayment from "./BlockchainPayment";
import "./PayPal.css";
export default function Paypal() {
    const paypal = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (_, actions) => { // Remove 'data' and 'err' variables
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "CAD",
                                    value: 650.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (_, actions) => { // Remove 'data' variable
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);

    return (
        <div className="payment">
            <div ref={paypal}></div>
            <BlockchainPayment />
        </div>
    );
}