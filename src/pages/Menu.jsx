import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "./BreadCrum";
import MenuDetail from "./MenuDetail";
import { ShopContext } from "../Context/ShopContext";

const Menu = () => {
  const { all_menu } = useContext(ShopContext);
  const { menuId } = useParams();
  const menu = all_menu.find((e) => e.id === Number(menuId));

  return (
    <>
      <BreadCrum menu={menu} />
      <MenuDetail menu={menu} />
    </>
  );
};

export default Menu;
