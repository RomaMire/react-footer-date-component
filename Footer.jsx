import React from "react";
import { useState, useEffect } from "react";
import FooterLogo from "../footerLogo/FooterLogo";
import styles from "./footer.module.scss";
import Cookie from "../cookie/Cookie";
const Footer = (props) => {
	let year = new Date().getFullYear();

	const [curYear, setCurYear] = useState(year);

	useEffect(() => {
		setCurYear(year);
	}, [year, curYear]);

	return (
		<>
			<footer className={styles.footer}>
				<Cookie></Cookie>
				<div className={styles.footer__container}>
					<FooterLogo textColor={"black"}></FooterLogo>
				</div>
				<div className={styles.footer__rights}>
					<p>
						Copyright &copy; <span>{curYear}</span> izerit
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
