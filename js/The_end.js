$(document).ready(function(){
  
    var $randomnbr = $('.nbr');
    var $timer= 100;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["T", "H", "A", "N", "K", ".", "Y", "O", "U", "😍"];
    
    $randomnbr.each(function(){
        
      change = Math.round(Math.random()*100);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });


  var myfooter=document.querySelector(".the_end_section");

  window.addEventListener("scroll",()=>{
    if ((window.pageYOffset) >= 125) {
      myfooter.classList.remove("display_none");
        
             
    }
    else{
      myfooter.classList.add("display_none");
    }
});
  