// // 모달창 만들기

// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("openModal");
// const closeModalBtn = document.getElementById("closeModal");

// // 모달창 열기 
// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//     document.body.style.overflow = "hidden";
// });

// // 
// closeModalBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
// });
// 모달창


// 메뉴 햄버거 아이콘 
var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});

// 햄버거 버튼 클릭 이벤트 
var burger = $('.menu-trigger');

burger.each(function (index) {
  var $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
  })
});

var h = 0;

$(burger).on("click", function () {
  if (h == 0) {
    $('.ham-con').animate({
      right: '0',
      opacity: 1
    }, 500);
    $(this).addClass('active-1');
    h++;
  } else if (h == 1) {
    $('.ham-con').animate({
      right: '-20%',
      opacity: 0
    }, 500);
    $(this).removeClass('active-1');
    h--;
  }
  $(window).scroll(function() {
    sct = $(window).scrollTop();
    if(sct>30){
      $('.ham-con').css({
        opacity: 0,
        right :'-20%'
      }, 500);
      $(burger).removeClass('active-1');
      h=0;
    }
  });
})

// 중간 드롭다운 
function dp_menu() {
    let click = document.getElementById("drop-content");
    if(click.style.display === "none"){
      click.style.display = "block";

  }else{
      click.style.display = "none";

  }
}



