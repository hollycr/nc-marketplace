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

// get users/:username/basket
const getUsers = () => {
  return axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/users")
    .then(({data}) => {
      const {users}=data
      return users;
    });
};

// post users/:username/basket
// delete users/:username/basket

// - should we create users first?
export { getItems, getCategories, postItem, postToBasket, getUsers };
