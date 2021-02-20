
  // Lindsey Gunderson
  // A00965002
  // MDIA 2294 - Web Scripting 1



$(document).ready(function(){

  // accordion
    $(".accordion").accordion({
  
      // start with accordion closed and remove height restriction to
      //match content
      heightStyle: "content",
      collapsible: true, 
      active: false 
    
  });
   
  
    // height of tabs
    $("#tabs").tabs({
  
      autoHeight: false
  
  });
  
  //animate jQuery page 
  $(".jquery-tabs").tabs({ 
    show: { 

      // add slide left effect with duration and easing attribute
      effect: "slide", 
      direction: "left", 
      duration: 700, 
      easing: "easeOutBack" }
      
  });


  
 
  
});
