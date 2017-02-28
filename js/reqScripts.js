jQuery(document).ready(function() {

	// =====================
	/* navScript jquery */
	// ---------------------
	
jQuery('#navBttn').on('click', function() {
      		jQuery('#navBox').fadeIn(400);
    });

jQuery('#navBttnX').on('click', function() {
    		jQuery('#navBox').fadeOut(350);
    });  


	// =====================
	/* viewportchechecker jquery */
	// ---------------------

jQuery('.ani-show-fst').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible feddFst', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-show-med').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible feddMed', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-show-slw').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible feddSlw', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-mov-left').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible leftSlow', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-mov-right').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible showRightFst', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-up-slw').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible sUpSlow', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-up-med').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible sUpMed', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});
jQuery('.ani-up-fst').addClass("space-invisible").viewportChecker({
	    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
	    classToAdd: 'space-visible sUpFst', // Class to add to the elements when they are visible,
	    removeClassAfterAnimation: false, // Remove added classes after animation has finished
	    offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
	   	repeat: true, // Add the possibility to remove the class if the elements are not visible
	    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
			});



//~~~~~~~~~~~~~~~~~~~~~
});
