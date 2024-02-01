import { getCategories, postItem } from "../api/api";
import { useEffect, useState } from "react";

const Sell = ({ categories, setCategories }) => {
  const [successfulPost, setSuccessfulPost] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(itemToPost);
    postItem(itemToPost).then((res) => {
      setSuccessfulPost(true);
    });
    setItemToPost({
      item_name: "",
      description: "",
      img_url: "",
      price: "",
      category_name: "",
    });
    setSuccessfulPost(false);
  }

  const [itemToPost, setItemToPost] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    category_name: "",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Item Name*</label>
        <input
          value={itemToPost.item_name}
          type="text"
          onChange={(event) =>
            setItemToPost({
              item_name: event.target.value,
              description: itemToPost.description,
              img_url: itemToPost.img_url,
              price: itemToPost.price,
              category_name: itemToPost.category_name,
            })
          }
          required
        />
        <label htmlFor="">Item Image*</label>
        <input
          value={itemToPost.img_url}
          type="text"
          onChange={(event) =>
            setItemToPost({
              item_name: itemToPost.item_name,
              description: itemToPost.description,
              img_url: event.target.value,
              price: itemToPost.price,
              category_name: itemToPost.category_name,
            })
          }
          required
        />
        <label htmlFor="">Item Price (in pence)*</label>
        <input
          value={itemToPost.price}
          type="number"
          onChange={(event) =>
            setItemToPost({
              item_name: itemToPost.item_name,
              description: itemToPost.description,
              img_url: itemToPost.img_url,
              price: Number(event.target.value),
              category_name: itemToPost.category_name,
            })
          }
          required
        />
        <label htmlFor="">Item Description</label>
        <input
          type="text"
          value={itemToPost.description}
          onChange={(event) =>
            setItemToPost({
              item_name: itemToPost.item_name,
              description: event.target.value,
              img_url: itemToPost.img_url,
              price: itemToPost.price,
              category_name: itemToPost.category_name,
            })
          }
        />
        <label htmlFor="category-options">Item Category</label>
        <select
          value={itemToPost.category_name}
          name="category-options"
          id="category-options"
          onChange={(event) =>
            setItemToPost({
              item_name: itemToPost.item_name,
              description: itemToPost.description,
              img_url: itemToPost.img_url,
              price: itemToPost.price,
              category_name: event.target.value,
            })
          }
        >
          {categories.map((cat) => (
            <option key={`${cat.category_name}1`} value={cat.category_name}>
              {cat.category_name}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
      {successfulPost ? <p>Successfully posted item for sale!</p> : null}
    </div>
  );
};

export default Sell;
