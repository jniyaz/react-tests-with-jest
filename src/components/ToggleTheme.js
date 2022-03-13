import React, { useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return <button onClick={toggleTheme}>Selected Theme : {theme}</button>;
};

export default ToggleTheme;
