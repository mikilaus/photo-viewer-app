let data1 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/igor-kasalovic-tNDvFkxkBHo-unsplash.jpg?raw=true",
    title: "My title 1",
    description: "What happened here, why is this a very nice image 1"
};

let data2 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/josefin-4VTtTkZ5Ms8-unsplash.jpg?raw=true",
    title: "My title 2",
    description: "What happened here, why is this a very nice image 2"
};

let data3 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/kaze-0421-XW5BbnQ1I5w-unsplash.jpg?raw=true",
    title: "My title 3",
    description: "What happened here, why is this a very nice image 3"
};

let data4 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/lucas-benjamin-R79qkPYvrcM-unsplash.jpg?raw=true",
    title: "My title 4",
    description: "What happened here, why is this a very nice image 4"
};

let data5 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/pascal-debrunner-9_53Y1MqCV4-unsplash.jpg?raw=true",
    title: "My title 5",
    description: "What happened here, why is this a very nice image 5"
};

let data6 = {
    photo: "https://github.com/mikilaus/mikilaus.github.io/blob/master/images/revolt-164_6wVEHfI-unsplash.jpg?raw=true",
    title: "My title 6",
    description: "What happened here, why is this a very nice image 6"
};



let imagesdata = [data1, data2, data3, data4, data5, data6];
let currentPhoto = 0;


let currentData = 0;   
imagesdata.forEach(element => {
         
      $(".thumbnail-cont").append(`<div class="thumbnail" data-number="${currentData}"> <img class="pict" src="${element.photo}" data-number="${currentData}"> <img class="arrowup" src="" alt="" data-number="${currentData}"> </div>`) ;     

      
      currentData++;
  });


$( ".thumbnail" ).hover(
    function() {
        isit = $(this).attr("data-number")
      $( this ).append(`<div class="toptitle"> ${imagesdata[isit].title} </div> <img class="arrowdown" src="" alt="">`);
    }, function() {
      $( this ).find( "div" ).last().remove();
      $( this ).find( "img" ).last().remove();
    }
  );



let loadPhoto = (photoNumber) => {
    
    $('#photo').attr('src', imagesdata[photoNumber].photo);
    $('#photo-title').text(imagesdata[photoNumber].title);
    $('#photo-description').text(imagesdata[photoNumber].description);
    $(".pict").css({"box-shadow": "0 4px 4px -1px #232323", "border-width": "2px"});
    $(`[class^=pict][data-number="${photoNumber}"]`).css({"box-shadow": "0 10px 10px -1px #232323", "border-width": "4px"});
    $('.arrowup').css("display", "none");   
    $(`[class^=arrowup][data-number="${photoNumber}"]`).css("display", "block");
   
}



loadPhoto(currentPhoto);




$( ".thumbnail-cont" ).on( "click", '.pict', (event) => {
    currentPhoto = $(event.target).attr("data-number")
    loadPhoto(currentPhoto)   
  //  console.log($(event.target).attr("data-number"))
}); 



$('#arrow2').click(() => {
    if (currentPhoto < imagesdata.length-1) {  
        currentPhoto++;      
        loadPhoto(currentPhoto);        
        
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);        
    }    
    
  });


$('#arrow').click(() => {
    if (currentPhoto > 0) {  
        currentPhoto--;      
        loadPhoto(currentPhoto);        
        
    } else {
        currentPhoto = imagesdata.length-1;
        loadPhoto(currentPhoto);   
    }    
    
  });


  




  







