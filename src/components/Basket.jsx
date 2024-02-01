function Basket({ basket, setBasket }) {
  function removeFromBasket(id) {
    // console.log(id);
    // setBasket((currentBasket) => {
    //   const arr=[...currentBasket]
    //   const filteredArray=arr.filter((item) => item.item_id !== id)
    //   return filteredArray
    // });
  }

  return (
    <>
      <p>user basket</p>
      {basket.map((item) => {
        return (
          <li key={`Basket ${item.item_id}`}>
            <h4>Id:{item.item_id}</h4>
            <h3>Name: {item.item_name}</h3>
            <p>Price: £{item.price / 100}</p>
            <p>Description: {item.description}</p>
            <img src={item.img_url} alt="" />
            <button onClick={removeFromBasket(item.item_id)}>
              Remove Item
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Basket;
