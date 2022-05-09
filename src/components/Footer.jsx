/** @format */

import React from "react";
import "./Footer.css";
import footer from "../images/footer.PNG";

function Footer() {
	const desc = (
		<p>
			$4.99/month after free trial. Only one offer per Apple ID and only one
			offer per family if you’re part of a Family Sharing group, regardless of
			the number of devices you or your family purchases. This offer is not
			available if you or your Family have previously accepted an Apple TV+ one
			year free offer. Offer good for 3 months after eligible device activation.
			Plan automatically renews until cancelled. Restrictions and other terms
			apply.
		</p>
	);

	return (
		<div className="footer">
			<div className="footer__desc">{desc}</div>
			<hr />
			<div className="footer__list"></div>
			<div className="footer__copyright"></div>
		</div>
	);
}
export default Footer;
