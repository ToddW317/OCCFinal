// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

$('.toggle-menu').click (function(){
	$(this).toggleClass('active');
	$('#menu').toggleClass('open');
  });


  const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



//Gallery

class CS_GalleryFilter {
	filtersSelector = '.cs-button';
	galleriesSelector = '.cs-gallery';
	activeClass = 'cs-active';
	hiddenClass = 'cs-hidden';

	constructor() {
		this.$galleries = document.querySelectorAll(this.galleriesSelector);
		const $filters = document.querySelectorAll(this.filtersSelector);

		this.onClick($filters[0]);

		for (const $filter of $filters) {
			$filter.addEventListener('click', () => this.onClick($filter));
		}
	}

	onClick($filter) {
		this.filter($filter.dataset.filter);

		const { activeClass } = this;

		this.$activeFilter?.classList.remove(activeClass);
		$filter.classList.add(activeClass);

		this.$activeFilter = $filter;
	}

	filter(filter) {
		const showAll = filter == 'all';
		const { hiddenClass } = this;

		for (const $gallery of this.$galleries) {
			const show = showAll || $gallery.dataset.category == filter;
			$gallery.classList.toggle(hiddenClass, !show);
		}
	}
}

new CS_GalleryFilter();
                                
                                

