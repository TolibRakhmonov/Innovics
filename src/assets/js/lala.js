// ERROR SUCCESS
    $('.warning').delay(3500).fadeOut();
    $('.success').delay(3500).fadeOut();



    var waypoint = new Waypoint({
        element: document.getElementById('home'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#ahome").toggleClass('active');
            $(".subheader .ordinary").show(500);
        },
        offset: -20
    })
    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#aabout").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 158
    })
    var waypoint = new Waypoint({
        element: document.getElementById('purpose'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#apurpose").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 158
    })
    var waypoint = new Waypoint({
        element: document.getElementById('gallery'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#agallery").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 158
    });
    var waypoint = new Waypoint({
        element: document.getElementById('samples'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#aprojects").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 200
    });
    var waypoint = new Waypoint({
        element: document.getElementById('prices'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#aprices").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 150
    });
    var waypoint = new Waypoint({
        element: document.getElementById('contacts'),
        handler: function(direction) {
            $("a").removeClass("active");
            $("#acontacts").toggleClass('active');
            $(".subheader .ordinary").hide(500);
        },
        offset: 158
    });
    
    
    //Directiong to blocks
    $('#ahome').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    
    $('#agallery').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#aabout').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#apurpose').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#apurpose').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#aprojects').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#aprices').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('#acontacts').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    
    
    
    
    
    
    
    
    //Header
    $("header .fa").on("click",function(){
        
        $("header nav").slideToggle(100);
    });
    //Contacts
    $(".changer").on("click",function(){
        if($(".changer").text()=="Показать Карту"){
            $(".contact").fadeOut(200);
            $(".changer").text('Показать Контакты');
        }
        else{
            $(".contact").fadeIn(200);
            $(".changer").text('Показать Карту');
        }
    });