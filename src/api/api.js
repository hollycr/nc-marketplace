import axios from "axios";

const getItems = (category = "") => {
  return axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/items?category_name=${category}`
    )
    .then(({ data }) => {
      const { items } = data;
      //console.log(items);
      return items;
      // setItems(items);
    })
    .catch((err) => {
      console.log(err, "<< err");
    });
};

const getCategories = (setCategories) => {
  return axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/categories")
    .then(({ data }) => {
      // if (setCategories) setCategories(data.categories);
      return data.categories;
    })
    .catch((err) => {
      console.log(err, "<< err");
    });
};

const postItem = (item) => {
  return axios
    .post("https://nc-marketplace-sem-4.onrender.com/api/items", item)
    .then((res) => {
      console.log(res, "<< axios res from post");
    })
    .catch((err) => {
      console.log(err, "<< err");
    });
};

const postToBasket = (item, username) => {
  console.log(
    item,
    "<<item to post in posttobasket",
    username,
    "<<username to post inposttobasket"
  );
  return axios
    .post(
      `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket`,
      item
    )
    .then((res) => {
      console.log(res, "<< res from post item to basket");
    })
    .catch((err) => {
      console.log(err, "<< err in posting to basket");
    });
};

const getBasket = (username) => {
  return axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket`
    )
    .then(({ data }) => {
      const { items } = data;
      console.log(items, "getBasket data");
      return items;
    });
};

const deleteFromBasket = (username, id) => {
  return axios
    .delete(
      `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/basket/${id}`
    )
    .then((data) => {
      console.log(data, "delete");
    });
};

// get users/:username/basket
const getUsers = () => {
  return axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/users")
    .then(({ data }) => {
      const { users } = data;
      return users;
    });
};

const postUser = (user) => {
  return axios
    .post(`https://nc-marketplace-sem-4.onrender.com/api/users`, user)
    .then(({ data }) => {
      const { user } = data;
      console.log(user);
      return user;
    });
};

const postOrder = (username, id) => {
  return axios
    .post(
      `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/orders`,
      { item_id: id }
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

const getOrders = (username) => {
  return axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/users/${username}/orders`
    )
    .then(({ data }) => {
      console.log(data, "orders data");
      const {items}=data
      return items;
    });
};

// post users/:username/basket
// delete users/:username/basket

// - should we create users first?
export {
  getItems,
  getCategories,
  postItem,
  postToBasket,
  getBasket,
  getUsers,
  deleteFromBasket,
  postUser,
  postOrder,
  getOrders,
};
