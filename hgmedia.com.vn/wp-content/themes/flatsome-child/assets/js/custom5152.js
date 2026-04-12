jQuery(document).ready(function($){
function editSliderBtn(){
		const sliderNextBtn = document.querySelector('.flickity-button.flickity-prev-next-button.next');
		var scrollTop = window.pageYOffset;
		if (sliderNextBtn.offsetTop < (window.innerHeight + scrollTop)){
			$('.flickity-button.flickity-prev-next-button.previous svg').html('<path d="M 10 50 L 60 100 L 64 98 L 15 50 L 64 2 L 60 0 Z" class="arrow"></path>');
			$('.flickity-button.flickity-prev-next-button.next svg').html('<path d="M 10 50 L 60 100 L 64 98 L 15 50 L 64 2 L 60 0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path>');			
		}	
	}

	document.addEventListener('scroll', editSliderBtn);
	var activeJobCat = $('.list-job-cat-inner').find('.active');
	if(activeJobCat){
		var activeWidth = activeJobCat.width() / 2;
		var jobCatPosition = $('.list-job-cat-inner').offset().left;
		 var pos = activeJobCat.position().left + activeWidth; //get left position of active li + center position
		var elpos = $('.list-job-cat-inner').scrollLeft(); // get current scroll position
		var elW = $('.list-job-cat-inner').width(); //get div width
		pos = pos + elpos - elW / 2; // for center position if you want adjust then change this
		$('.list-job-cat-inner').scrollLeft(pos);
	}
	
	// Instantiates the variable that holds the media library frame.
var meta_image_frame;
        
// Runs when the image button is clicked.
$('#job-image-button').click(function(e){

	// Prevents the default action from occuring.
	e.preventDefault();

	// If the frame already exists, re-open it.
	if ( meta_image_frame ) {
		meta_image_frame.open();
		return;
	}

	// Sets up the media library frame
	meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
		title: 'Upload or select image',
		button: { text:  'Use this image' },
		library: { type: 'image' }
	});

	// Runs when an image is selected.
	meta_image_frame.on('select', function(){

		// Grabs the attachment selection and creates a JSON representation of the model.
		var media_attachment = meta_image_frame.state().get('selection').first().toJSON();

		$('#job-avatar').val(media_attachment.url);
		$('.job-avatar-image').attr('src', media_attachment.url);
	});

	// Opens the media library frame.
	meta_image_frame.open();
});
});