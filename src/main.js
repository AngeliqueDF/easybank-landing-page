window.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector("header");
	const mobileMenuButton = document.querySelector("#open-mobile-menu");
	const nav = document.querySelector("header > nav");

	mobileMenuButton.addEventListener("click", (e) => {
		header.classList.toggle("mobile-menu-open");
		mobileMenuButton.classList.toggle("mobile-menu-open");
		nav.classList.toggle("hide");
	});
});
