$(function(){

    // fade-in-out
    // 상단 큰 이미지 슬라이드
    let now = 0

    // .slide li 모두 안보이게
    $('.slide li').hide()
   
    // $('.slide li:nth-child(1)').show()
    $('.slide li').eq(now).show()
   
    /*
    $('.slide li:nth-child(1)').hide()
    $('.slide li:nth-child(2)').show()

    $('.slide li:nth-child(2)').hide()
    $('.slide li:nth-child(3)').show()
    
    $('.slide li:nth-child(3)').hide()
    $('.slide li:nth-child(1)').show()
   */ 

//    function (조건문){실행문}
    // 상단 슬라이드 (페이드인아웃은 시작값이 0인것이 편리함)
    setInterval(function(){

        if (now < 2) {

            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(now+1).fadeIn()

            now = now+1
        
        }else{
            
            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(0).fadeIn()

            now = 0

        }

    },3000)  /* 3초마다 실행 */

    // 탭 클릭

    $('.tab h2').click(function(){
        $('.tab section').removeClass('on')
        $(this).parent().addClass('on')
    })


    // 배너 슬라이드 (슬라이드는 시작값이 1이 편리함)
    let now2 = 1

    setInterval(function(){
                
        // 만약 첫번째 이미지일 경우 : 2번째 이미지로 이동
        if(now2<3){

            $('.slide-bnr ul').animate({
                left : ((-1)*now2*100) + '%'
            })
            now2 = now2+1

        }else{
        
            // 그밖에 2번째 이미지일 경우 : 첫번째 이미지로 이동
            $('.slide-bnr ul').animate({
                left : '0'
            })
            now2 = 1
        }
        
    },2000) /* 2초마다 실행 */
    
    // 공지사항 모달창 띄우기
    $('.sec-bbs li:first-child').click(function(){
        $('#modal').show()
    })

    // 닫기
    $('#modal input').click(function(){
        $('#modal').hide()
    })

    
})  /* 준비이벤트 끝*/