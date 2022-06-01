import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import logo from '../public/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/"><Image
        src={logo}
        alt="Picture of the author"
        width={60}
        height={60}
      /></Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/course">Course</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/tools">Tools</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-100vw" }}>
      <li className={style.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/course">Course</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/tools">Tools</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;