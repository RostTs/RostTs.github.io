
  var bannerStatus = 1;
  var bannerTimer = 4000;
  
  window.onload = function(){
	  bannerloop();
  }
  
  var startBannerLoop = setInterval(function(){
	  bannerloop();
  }, bannerTimer);
  
  document.getElementById("main_banner").onmouseenter = function(){
	  clearInterval(startBannerLoop);
  }
  
  document.getElementById("main_banner").onmouseleave = function(){
	  startBannerLoop = setInterval(function(){
	  bannerloop();
  }, bannerTimer);
  }
  
  document.getElementById("imgbutton_prev").onclick = function(){
	  if(bannerStatus === 1){
		  bannerStatus = 2;
	  }
	 else if(bannerStatus === 2){
		  bannerStatus = 3;
	  }
	  else if(bannerStatus === 3){
		  bannerStatus = 1;
	  }
	  bannerloop();
	  
  }
   document.getElementById("imgbutton_next").onclick = function(){
	  bannerloop();
  }
  
  function bannerloop(){
	  if(bannerStatus === 1){
		  document.getElementById("image_ban2").style.opacity = "0";
		  setTimeout(function(){
		  document.getElementById("image_ban1").style.right = "0px";
		  document.getElementById("image_ban1").style.zIndex = "1000";
		  document.getElementById("image_ban2").style.right = "-1000px";
		  document.getElementById("image_ban2").style.zIndex = "1500";
		  document.getElementById("image_ban3").style.right = "1000px";
		  document.getElementById("image_ban3").style.zIndex = "500";
		  }, 500);
		  setTimeout(function(){
		  
		  document.getElementById("image_ban2").style.opacity = "1";
		  }, 1000);
		  bannerStatus = 2;
	  }
	  else if(bannerStatus === 2){
		  document.getElementById("image_ban3").style.opacity = "0";
		  setTimeout(function(){
		  document.getElementById("image_ban2").style.right = "0px";
		  document.getElementById("image_ban2").style.zIndex = "1000";
		  document.getElementById("image_ban3").style.right = "-1000px";
		  document.getElementById("image_ban3").style.zIndex = "1500";
		  document.getElementById("image_ban1").style.right = "1000px";
		  document.getElementById("image_ban1").style.zIndex = "500";
		  }, 500);
		  setTimeout(function(){
		  
		  document.getElementById("image_ban3").style.opacity = "1";
		  }, 1000);
		  bannerStatus = 3;
	  }
	  else if(bannerStatus === 3){
		  document.getElementById("image_ban1").style.opacity = "0";
		  setTimeout(function(){
		  document.getElementById("image_ban3").style.right = "0px";
		  document.getElementById("image_ban3").style.zIndex = "1000";
		  document.getElementById("image_ban1").style.right = "-1000px";
		  document.getElementById("image_ban1").style.zIndex = "1500";
		  document.getElementById("image_ban2").style.right = "1000px";
		  document.getElementById("image_ban2").style.zIndex = "500";
		  }, 500);
		  setTimeout(function(){
		  
		  document.getElementById("image_ban1").style.opacity = "1";
		  }, 1000);
		  bannerStatus = 1;
	  }

  }