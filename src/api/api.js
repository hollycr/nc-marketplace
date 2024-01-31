import axios from "axios";

const getItems = (category = "", setItems) => {
  axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/items?category_name=${category}`
    )
    .then(({ data }) => {
      const { items } = data;
      setItems(items);
    });
};

const getCategories = (setCategories) => {
  return axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/categories")
    .then(({ data }) => {
      if (setCategories) setCategories(data.categories);
      //console.log(data.categories);
      return data.categories;
    });
};

export { getItems, getCategories };
