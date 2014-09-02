var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image and caption to overlay
$overlay.append($image);
$overlay.append($caption);

// Add the overlay
$("#about").append($overlay);

// Capture the click event on a link to an image
$(".image a").click(function(event){
  event.preventDefault();

  //Get child's alt attribute and set caption
  //var imageCaption = $(this).children("img").attr("alt");
  //$caption.text(imageCaption);

  var imageLocation = $(this).attr("href");

  // Update overlay with the image linked in the link 
  $image.attr("src", imageLocation)

  // Show the overlay
  $overlay.show();
});

//  Hide overlay
$overlay.click(function(){
  $overlay.hide();
});