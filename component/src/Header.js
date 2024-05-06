import React from "react";
import "./Header.css";

function Header() {
  //*js alanı
  const mesaj = "hello";
  console.log(mesaj);
  return (
    // return içerisi jsx alanı olarak tanımlanır return ve function arası ise js alanı olarak geçer
    <header className="header-main">
      <h1 style={{ color: "pink" }}>Header {mesaj}</h1>
    </header>
  );
}

export default Header;
