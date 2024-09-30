import React from "react";
import Link from "next/link";

// two different ways to decalre types yet are the same thing

// type props = {
//   title: string;
//   link: string;
// };

// const Button = ( {title, link}: props) => {
const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link} className="rounded-xl bg-sw-gold-100 px-10 py-5">
      Button
      {title}
      {link}
    </Link>
  );
};

export default Button;
