import { getCategories } from "../api/api";

const Sell = () => {
  const categories = getCategories();
  console.log(categories);
  return (
    <div>
      <form>
        <label htmlFor="">Item Name*</label>
        <input type="text" />
        <label htmlFor="">Item Image*</label>
        <input type="text" />
        <label htmlFor="">Item Price*</label>
        <input type="text" />
        <label htmlFor="">Item Description</label>
        <input type="text" />
        <label htmlFor="">Item Category</label>
        <select name="" id=""></select>
      </form>
    </div>
  );
};

export default Sell;
