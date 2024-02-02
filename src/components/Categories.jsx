import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api/api";
import { Tab, Tabs, Box } from "@mui/material";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs onChange={handleChange}>
          {categories.map((category) => (
            <Link to={`/buy/${category.category_name}`}>
              <Tab value={value + 1} label={category.category_name} />
            </Link>
          ))}
        </Tabs>
      </Box>
    </>
    // <div className="dropdown">
    //   <button onClick={handleOpen}>Categories</button>
    //   <ul>
    //     {isOpen
    //       ? categories.map((category) => (
    //           <li key={category.category_name}>
    //             <Link to={`/buy/${category.category_name}`}>
    //               {category.category_name}
    //             </Link>
    //           </li>
    //         ))
    //       : null}
    //   </ul>
    // </div>
  );
};

/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    categories.map((category) => (
    <Link to={`/buy/${category.category_name}`}>
      <Tab label={category.category_name}  />
    </Link>
    <Tab label="Item One"  />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>;

{ */
/* <CustomTabPanel value={value} index={0}>
  Item One
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  Item Three
</CustomTabPanel> */

export default Categories;
