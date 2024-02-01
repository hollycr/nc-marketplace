import axios from "axios";

const getItems = (category = "", setItems) => {
  axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/items?category_name=${category}`
    )
    .then(({ data }) => {
      const { items } = data;
      setItems(items);
    })
    .catch((err) => {
      console.log(err, "<< err");
    });
};

const getCategories = (setCategories) => {
  axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/categories")
    .then(({ data }) => {
      if (setCategories) setCategories(data.categories);
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
export { getItems, getCategories, postItem };
