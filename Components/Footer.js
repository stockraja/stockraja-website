import React from 'react'
import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.siteFooter}>
			<div className={style.about}>
				<h4>ABOUT</h4>
				<p>We are a young team of fulltime Stockmarket Trader and Investor. Our mission is to spread awareness about stock market as well as other financial market. To go to roots of basics and take our students to a stage of professionalism. </p>
			</div>

			<div className={style.quickLinks}>
				<h4>QUICK LINKS</h4>

				<Link href="/"><p>Home</p></Link>


				<Link href="/about-us"><p>About Us</p></Link>


				<Link href="/course"><p>Course</p></Link>


				<Link href="/blogs"><p>Blogs</p></Link>


				<Link href="/tools"><p>Tools</p></Link>

			</div>

			<div className={style.social}>
				<h4>SOCIAL</h4>

				<a href='https://www.instagram.com/_stockraja_trading_institute/'><p> Instagram</p></a>
				<a href='https://www.facebook.com/stockraja.in'><p> Facebook</p></a>
				<a href='https://www.youtube.com/channel/UC27yfw0Nztz6HdP-2TLOGZQ'><p> Youtube</p></a>

			</div>
			</div>

			<div className={style.rights}>

				<p>All Rights Reserved @ <strong> Stockraja.in</strong></p>

			</div>


		</footer>
	)
}

export default Footer