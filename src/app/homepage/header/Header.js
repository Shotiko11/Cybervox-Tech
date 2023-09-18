"use client";

import React, { useState } from "react";
import "./header.css";
import Elements from "./Elements";

const Header = () => {

  const [login, setLogin] = useState(true);
  const [visible, setVisible] = useState(true);

  return (
    <Elements setLogin={setLogin} visible={visible} setVisible={setVisible} />
  );
};

export default Header;