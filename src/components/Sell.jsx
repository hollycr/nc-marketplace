import { getCategories } from "../api/api";

const Sell = () => {
  getCategories().then((categories) => {
    console.log(categories, "<<categories in sell");
  });
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
  //console.log(getCategories, "<< categories in sell");
};

export default Sell;
