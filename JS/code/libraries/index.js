$('#btn').click(function ()
{
    $('#myDiv').html("HAiiiiiiiiiiiiiii")
    $('#myDiv').slideToggle(2000)
})//$ means document.querySelector
  var typed = new Typed("#ele", {
		strings: ["first","second","third"],
		typeSpeed: 50,
  })
     AOS.init()
  const swiper = new Swiper("#swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	})