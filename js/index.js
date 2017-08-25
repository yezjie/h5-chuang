var color_lump = document.getElementsByClassName("color_lump")[0];
var color_lump_img = color_lump.getElementsByTagName("img");
var header = document.getElementById("header_img");
var header_img = header.getElementsByTagName("img");
var swiper_header = document.getElementById("swiper-header");
var swiper_slid = swiper_header.getElementsByClassName("swiper-slide");
var h_lun = document.getElementById("h_lun");
var swiper_body = document.getElementById("swiper-body");
var bu_b = document.getElementById("bu_b");
var tou_box = document.getElementsByClassName("tou_box");
var big_t = document.getElementsByClassName("big_t");
var close_btn = document.getElementsByClassName("close_btn");
var h_fd = document.getElementById("h_fd");

color_lump.style.height = color_lump.offsetWidth*0.9903 + "px";

document.body.style.fontSize=document.body.offsetWidth*0.1 + "px";
for(var i=0;i<header_img.length;i++){
	header_img[i].index = i;
	header_img[i].addEventListener("touchstart",function(){
		for(var j=0;j<header_img.length;j++){
			header_img[j].style.transition = "all 1s"
			header_img[j].style.transform = "scale(0)";
		}
		swiper_header.style.transition = "all 1s"
		swiper_header.style.transform = "scale(1)";
	},false);
}
swiper_body.addEventListener("touchstart",function(){
	if(h_lun.getAttribute("class")!="swiper-slide swiper-slide-active"){
		for(var j=0;j<header_img.length;j++){
			header_img[j].style.transition = "all 0s"
			header_img[j].style.transform = "scale(1)";
		}
		swiper_header.style.transition = "all 0s"
		swiper_header.style.transform = "scale(0)";
	}
	if(h_fd.getAttribute("class")!="swiper-slide swiper-slide-active"){
		for(var j=0;j<tou_box.length;j++){
			tou_box[j].style.zIndex = 0;
			big_t[j].className = "big_t"
		}
	}
},false)
//第五页
for(var i=0; i<tou_box.length; i++){
	tou_box[i].index = i;
	tou_box[i].addEventListener("touchstart",function(){
		for(var j=0;j<tou_box.length;j++){
			tou_box[j].style.zIndex = 0;
			big_t[j].className = "big_t"
		}
		this.style.zIndex = 1;
		big_t[this.index].className = "big_t active";

	},true)
}
//关闭
for(var i=0; i<close_btn.length; i++){
	close_btn[i].index = i;
	close_btn[i].addEventListener("touchstart",function(){
		big_t[this.index].className = "big_t";
		event.preventDefault();
	},true)
}




