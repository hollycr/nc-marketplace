const Item = ({ item, setBasket }) => {
  function addToBasket() {
    setBasket((currentBasket) => [...currentBasket, item]);
  }

  return (
    <div>
      <h4>Id:{item.item_id}</h4>
      <h3>Name: {item.item_name}</h3>
      <p>Price: £{item.price / 100}</p>
      <p>Description: {item.description}</p>
      <img src={item.img_url} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
};

export default Item;
