"use client";

import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import Login from "@/pages/Login";
import Elements from "./Elements";

const Header = () => {

  const [login, setLogin] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <Elements />
  );
};

export default Header;