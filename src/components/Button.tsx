import React from "react";

// two different ways to decalre types yet are the same thing

// type props = {
//   title: string;
//   link: string;
// };

// const Button = ( {title, link}: props) => {
const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <div>
      Button
      {title}
      {link}
    </div>
  );
};

export default Button;
