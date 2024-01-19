baguetteBox.run(".gallery");

document.getElementById("photo-search").addEventListener("keyup", function () {
	const value = this.value.toLowerCase();
	const galleryLinks = document.querySelectorAll(".gallery-link");

	galleryLinks.forEach(function (link) {
		const linkCaption = link.getAttribute("data-caption").toLowerCase();
		link.style.display = linkCaption.indexOf(value) > -1 ? "block" : "none";
	});
});
