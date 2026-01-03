// About Me content is the one by default shown
$('#educationContent').hide();
$('#publicationsContent').hide();
$('#experienceContent').hide();
$('#conferencesContent').hide();
$('#projectsContent').hide();
$('#tutorialsContent').hide();
$('#academicContent').hide();
$('#particularContent').hide();

// Hides all the divs in the particular, unless the first one
$('.particular-clickable').next().hide();
var nextElement = $('.particular-clickable').next()[0];
if (nextElement) {
    nextElement.style.display = "block";
}


$(document).ready(function(){

	$.getJSON("https://api.countapi.xyz/hit/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a", function(response) {
		$("#contadorVisitas").text(response.value);
	});

	// First time, check the theme
	if(localStorage.getItem("theme") === null){
		localStorage.theme = "light";
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			localStorage.theme = "dark";
	}

	// Load the correct theme on page load
	$('<link>').appendTo('head').attr({
		type: 'text/css', 
		rel: 'stylesheet',
		href: '/assets/css/light.css'
	});
	
	if (localStorage.theme == "dark") {
		$("link[href='/assets/css/light.css']").remove();
		$('<link>').appendTo('head').attr({
			type: 'text/css', 
			rel: 'stylesheet',
			href: '/assets/css/dark.css'
		});
		$('#theme-toggle').empty().append("<i class='fa-solid fa-sun'></i>");
		$('html').attr('data-theme', 'dark');
	} else {
		$('#theme-toggle').empty().append("<i class='fa-solid fa-moon'></i>");
		$('html').attr('data-theme', 'light');
	}

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'My Background' content
$('#background').click(function(e) {

    // If the div has already the class active, no need to reload the divs...
    if(!$(e.target).hasClass('active')) {
        // Update navbar
        clearActiveLinks();
        activateLink(e);

        // Hide other contents
        clearActiveDivs();

        // Show current content
        activateDiv('#my-backgroundContent');
    }
});

	// Handle 'Publications' content
	$('#publications').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#publicationsContent');
		}
	});

	// Handle 'Blog' content
	$('#tutorials').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#tutorialsContent');
		}
	});

	// Handle 'Academic' content
	$('#academic').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#academicContent');
		}
	});

	// Handle 'Particular' content
	$('#particular').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#particularContent');
		}
	});

	// Whenever you clic on a blog post, you should be redirected to that post' html
	$('.clickable').click(function(e) {
		window.open($(e.currentTarget)[0].childNodes[1].innerText, '_blank').focus();
	});

	// Whenever you clic on a clases particulares heading, you should toggle
	$('.particular-clickable').click(function(e) {
		var e = $(e.currentTarget)[0].nextElementSibling;
		if (e.style.display === "none") {
			e.style.display = "block";
		}
		else {
			e.style.display = "none";
		}
	});

	// Copy the citation to the clipboard
	// THIS SHOULD BE THE SAME FOR ALL THE PAPERS
	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;

		navigator.clipboard.writeText(text);

		toastr.success('Citation copied');
	});

	if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'clases-particulares') {
		$('#particular').click();
		$('#particularContent').focus();
	}

	// Theme toggle button functionality
	$('#theme-toggle').click(function(e) {
		if(localStorage.theme != "dark"){
			// Switch to dark mode - show sun icon
			$('#theme-toggle').empty().append("<i class='fa-solid fa-sun'></i>");
			localStorage.theme = "dark";
			$('html').attr('data-theme', 'dark');
			
			$("link[href='/assets/css/light.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: '/assets/css/dark.css'
			});
		}
		else {
			// Switch to light mode - show moon icon
			$('#theme-toggle').empty().append("<i class='fa-solid fa-moon'></i>");
			localStorage.theme = "light";
			$('html').attr('data-theme', 'light');
			
			$("link[href='/assets/css/dark.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: '/assets/css/light.css'
			});
		}
	});

});

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function activateLink(e) {
	$(e.target).addClass('active');
	
	// Hide left panel
	if(e.target.id == "particular")
		$('#leftPanel').hide();
	else
		$('#leftPanel').show();
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}

function resetViews() {
	$.getJSON("https://api.countapi.xyz/set/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a?value=0", function(response) {
		$("#contadorVisitas").text("0");
	});
}
