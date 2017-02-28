/**

navSpace - NREZA


-------
<div id="navBox">

	<div class="top-bar">
		<div id="navBttnX"><img src="img/navBttnX.svg"></div>
	</div>

	<ul>
		<li>ABOUT</li>
		<li>PROJECTS</li>
		<li>UPDATES</li>
		<li>CONTACT</li>
	</ul>

</div><!-- /#navBox -->
--------
*/

jQuery(function(){    
    jQuery('#navBttn').on('click', function() {
      		jQuery('#navBox').fadeIn(400);
    });

jQuery('#navBttnX').on('click', function() {
    		jQuery('#navBox').fadeOut(350);
    });  
    
    
});
