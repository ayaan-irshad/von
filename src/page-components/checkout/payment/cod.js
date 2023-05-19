import React from 'react';

export default function CODCheckout({ onSuccess }) {
  const handleCheckout = () => {
    // Create the order
    createOrder()
      .then((response) => {
        // Handle the successful response
        console.log('Order created:', response.data);
        onSuccess();
      })
      .catch((error) => {
        // Handle errors
        console.error('Error creating order:', error);
      });
  };

  const createOrder = async () => {
    const endpoint = 'https://api.crystallize.com/ayaan-irshad-bhat/orders';

    const payload = {
      query: `
        mutation createOrder {
          orders {
            create(
              input: {
                customer: {
                  firstName: "Crystal"
                  lastName: "Ecommerce"
                  identifier: "cus_0001"
                  addresses: [
                    {
                      type: billing
                      street: "Kverndalsgata"
                      streetNumber: "8"
                      city: "Skien"
                      country: "Norway"
                      postalCode: "1234"
                    }
                    {
                      type: delivery
                      street: "Kverndalsgata"
                      streetNumber: "8"
                      city: "Skien"
                      country: "Norway"
                      postalCode: "1234"
                    }
                  ]
                }
                cart: {
                  name: "Calathea"
                  sku: "maranta-leuconeura-1611849929203"
                  quantity: 1
                  price: {
                    currency: "EUR"
                    tax: { name: "No Tax", percent: 0 }
                    net: 23
                    gross: 23
                  }
                }
                payment: [
                  {
                    provider: stripe
                    stripe: {
                      orderId: "ord_0001"
                      customerId: "cus_0001"
                      paymentMethod: "card"
                      paymentIntentId: "pi_0001"
                      metadata: null
                    }
                  }
                ]
                total: { gross: 23, net: 23, currency: "EUR" }
              }
            ) {
              id
            }
          }
        }
      `
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return data;
  };

  return <button onClick={handleCheckout}>Submit</button>;
}
