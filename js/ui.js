



$('.gnbBtn').on('click',function () {

	$('nav').show();

});

$('nav .closeBtn ').on('click',function () {

	$('nav').hide();
});


function closePop(){
	$('.container').removeClass('overlay');
	$('.popup').hide();

}

/** 팝업에 추가 팝업 *&*/
function closePop2(){
	$('.container').addClass('overlay');
	$('.container').removeClass('overlay2');
	$('.popup.innerPop').hide();
}

function innerPop(){

	$('.container').addClass('overlay2');
	$('.container').removeClass('overlay');
	$('.popup.innerPop').show();

}


$('.sbox ul a').on('click',function () {

	var _set = 	$(this).parents('.sbox').find('a.set');
	var _txt = 	$(this).text();

	_set.text(_txt);
	$(this).parents('ul').slideUp();
	_set.removeClass('on');

});

$('.sbox a.set').on('click',function () {

	console.log("here")

	if($(this).hasClass('on')){

		$(this).removeClass('on')
		$(this).siblings('ul').stop().slideUp();

	}else{
		$(this).addClass('on')
		$('.sbox ul').hide();
		$(this).siblings('ul').stop().slideDown();


	}
});

// 북마크 onoff
$('.bookmark').on('click',function (event) {

	$(this).toggleClass('on');
})


$('.navMenu a').on('click',function () {

	var _list = $(this).siblings('ul')

	if($(this).hasClass('on')){
		$(this).removeClass('on');

		_list.stop().slideUp();


	}else{
		$(this).addClass('on');
		_list.stop().slideDown();

	}



})


// 모바일

$('.mobileBtn').on('click',function () {

	var _gnb = $('nav');
	$('.container').addClass('overlay');
	_gnb.show("slide", {direction: "left"})


});


// 모바일 메뉴
$(document).mouseup(function (e){

	var _gnb = $('nav');


	if($('nav').css('display') == 'block'){
		if($('.mobileInfo').css('display') == "block") {

			if (!_gnb.is(e.target) && _gnb.has(e.target).length === 0){

				_gnb.hide("slide", {direction: "left"})
				$('.container').removeClass('overlay')
			}
		}
	}


});
