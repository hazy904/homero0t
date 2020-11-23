
    import React from 'react';

    export default function CartScreen(props) {
      const productId = props.match.params.id;
      const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
      return (
        <div>
        <h1>Cart Screen</h1>
        <button>place orders</button>
        <p>
          ADD TO CART : ProductID: {productId} Qty: {qty}
        </p>
        </div>
      );
    }
 