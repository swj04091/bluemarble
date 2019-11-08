/**
 * 
 */
   let startMoney=3000000;	//시작시 돈
   let afterPoint = 1;	//현재  위치
   let beforePoint = 1;	//아동 전 위치
   let beforeId = "#pic1";	// 이동하기건 위치의 id값
   let afyerId;	//이동을 한 후의 id값
   let round = 0;	//
   let play = 1; 	
   let donate = 0;	//기부금
   let turn = 0;
   let player_number;
   let condition;
   let who;
   
   let   player1 = {
         who :1,
         afterPoint : 1,
         beforePoint : 1,
         beforeId : "#pic"+beforePoint,
         round : 0,
         condition : 0,
         money : 3000000
      }
   let   player2 = {
         who : 2,   
         afterPoint : 1,
            beforePoint : 1,
            beforeId : "#pic"+beforePoint,
            round : 0,
            condition : 0,
            money : 3000000
         }
   let   player3 = {
         who :3,
            afterPoint : 1,
            beforePoint : 1,
            beforeId : "#pic"+beforePoint,
            round : 0,
            condition : 0,
            money : 3000000
         }
   let   player4 = {
         who :4,
            afterPoint : 1,
            beforePoint : 1,
            beforeId : "#pic"+beforePoint,
            round : 0,
            condition : 0,
            money : 3000000
         }
   //주사위 돌리기 
   
   let dice =function(player_number){
      //player 객체
            
            let gamer;
            if(play==1){//----------------------각 턴마다 player 객체를 지정
               gamer = player1;
               console.log("player1");
            }else if(play==2){
               gamer = player2;
               console.log("player2");
            }else if(play==3){
               gamer = player3;
               console.log("player3");
            }else if(play==4){
               gamer = player4;
               console.log("player4");
            }
            //------------------------------각 플레이어에 변수 설정
            //console.log("before",gamer);
            //console.log("player: ",play);
            gamer.beforePoint = gamer.afterPoint;
            let firstDice = 0; 
            firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
             //--------------------------------------두번째 주사위
            let secondDice = 0; 
            secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
               //------------처음 받는 돈
      //-------------------------------------------------------------------주사위 돌리기 전,후      
            //주사위 출력
            $("#one").append("<input class='pic' type= 'image' src='/board_Game/images/"+firstDice+".jpg'>");
            $("#two").append("<input class='plc' type= 'image' src='/board_Game/images/"+secondDice+".jpg'>");
            console.log("1");
            let person = "#player"+play+"_money";//플레이어에 재산을 출력할수 있는 태그
            let move = firstDice + secondDice;//--------------------------------이동한 칸  
            if(/*gamer.beforePoint==31) ||*/ gamer.beforePoint==11){//무인도랑 우주여행일때 이동 X
               move=0;
               console.log("2");
            }
            //console.log("player",play,"move:",move);
            
            //console.log("after Point+:",gamer.afterPoint);
            //주사위 돌린 후 위치 
            gamer.afterPoint = parseInt(gamer.beforePoint) + parseInt(move);
            console.log("3");
            //console.log("after Point+++:",gamer.afterPoint); //118이 된다
            //-----------------------------------------------한바퀴 이상 돌았을때 
            if(gamer.afterPoint>40){//-----한 바퀴에 마지막이 40번째칸
               console.log("4");
               gamer.afterPoint = gamer.afterPoint % 40;//다시 1초 돌려준다
               gamer.money = gamer.money + 200000;   //---------------월급         
               //console.log("money : ",gamer.money);
               gamer.round = gamer.round + 1;//각 한바퀴를 돌은 횟수
               //console.log("round:",gamer.round);
                
               $(person).empty();//비우고,
               $(person).text(gamer.money);//---------재산 출력
               //console.log("player tag:",person);
               //console.log("money",gamer.money);
               
            }//-----------------------------------------------------------------------------------주사
            //주사위 둘리기 전 위치 태그
            gamer.beforeId = "#pic"+gamer.beforePoint; 
            //주사위 돌린 후 위치 태그
            afterId = "#pic"+gamer.afterPoint;
            
            //주사위 돌리기 전 이미지 삭제
            $(gamer.beforeId).find(".player"+play).remove();
            console.log("5");
            //캐릭터 출력
            $(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
            console.log("6");
            switch(gamer.afterPoint){
            
            case 39:  //사회 복지 기금 15만원 지출 
               console.log("39");
                  gamer.money -= 150000;
                  //console.log(gamer.money);
                  $(person).empty();
                  $(person).text(gamer.money);
                  
                  donate += 150000; //----기부금 추가
                  $("#donate").empty();
                  $("#donate").text("기부금액:"+donate);
                  //console.log("donate :",donate);
                  //alert("기부 땡큐");
                  //현재 위치를 주사위 돌리기 전으로 초기화해준다
                  gamer.beforePoint = gamer.afterPoint;
                  //console.log("after",gamer);
                  
                  // if(firstDice != secondDice){
                     play += 1;   //-- 매 턴마다 돌아가게 한다
                     if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                        play = play % player_number;
                     }
                   //}s
                  
                  break;
                
            case 21: //사회 복지 단체 기부금 다 받음 
                  gamer.money += donate;//-------기부금 추가
                  //console.log(gamer.money);
                  $(person).empty();
                  $(person).text(gamer.money);
            
                  donate=0; //---------기부금 초기화
                  $("#donate").empty();
                  $("#donate").text("기부금액:"+donate);
                  console.log("21");
                  //현재 위치를 주사위 돌리기 전으로 초기화해준다
                  gamer.beforePoint = gamer.afterPoint;
                  //console.log("after",gamer);
                  
                  // if(firstDice != secondDice){
                     play += 1;   //-- 매 턴마다 돌아가게 한다
                     if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                        play = play % player_number;
                     }
                   //}
                  break;
               
            case 11:   //무인도 도착
                  console.log("무인도 도착");
                  
                  if(gamer.condition>2 || firstDice == secondDice){//3번 차례가 지나거나 ,주사위가 더블일때
                  console.log("탈출이다!!!");
                  //console.log("탈출 전 지점",gamer);
                  //afterPoint 지점 지정
                  gamer.afterPoint = parseInt(gamer.afterPoint) + parseInt(firstDice) + parseInt(secondDice);
                  //console.log("탈출 후 지점",gamer);
                  //현재 위치를 주사위 돌리기 전으로 초기화해준다
                  gamer.beforeId = "#pic11";
                  afterId = "#pic"+gamer.afterPoint;
                  
                  //주사위 돌리기 전 이미지 삭제
                  $(gamer.beforeId).find(".player"+play).remove();
                  //캐릭터 출력
                  $(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
                  gamer.beforePoint = gamer.afterPoint;
                  
                  //console.log("after+-",gamer);
                  
                     play += 1;   //-- 매 턴마다 돌아가게 한다
                     if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                        play = play % player_number;
                     }
                     break;
                  }else{
                     gamer.condition+=1;// 3될때까지
                  //   console.log("무인도 도착",gamer.condition,"일")
                     
                     play += 1;   //-- 매 턴마다 돌아가게 한다
                     if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                        play = play % player_number;
                     }
                     break;
                  }   
                  break;   
            
            case 31:   //우주 정거장 도착,원하는 위치로 이동
                  console.log("우주 여행");
                  //값이 1이상일때는 주사위버튼 숨기기,select 보여주기
                  if(gamer.condition>0){
                     console.log("7");
                     gamer.condition=0;
                     //나라 메뉴 클릭
                     $("#trip").show();
                     $("#gogo").show();
                     $("#move").hide();
                     $("#gogo").click(function(){//--------------------select 클릭
                     //console.log(gamer);
                        //선택한 값을 받아온다
                        gamer.afterPoint = $("#trip option:selected").val();//select에서 선택한 option에 값을 afterPoint에 저장
                        console.log("8");
                        //   console.log("이동할 장소",gamer.afterPoint);//확인
                        //위치 조건
                        if(gamer.afterPoint<31 || gamer.afterPoint>0){
                           console.log("9");
                           gamer.round += 1;
                           gamer.money = gamer.money + 200000;   //---------------월급         
                     //      console.log("우주money : ",gamer.money,"round Space:",gamer.round);
                           
                           $(person).empty();//비우고,
                           $(person).text(gamer.money);//---------재산 출력
                        }
                        gamer.beforeId = "#pic31";
                        afterId = "#pic"+gamer.afterPoint;
                        console.log("10");
                     //   console.log("이동할 위치 태그",afterId,"이동전 위치>:",gamer.beforeId);
                     
                        //////////////////////////////
                        //주사위 돌리기 전 이미지 삭제
                        $(gamer.beforeId).find(".player"+play).remove();
                        //캐릭터 출력
                        $(afterId).append("<input id='pl' class='player"+play+"' type= 'image' src='/board_Game/images/player"+play+".gif'>");
                        
                        //현재 위치를 주사위 돌리기 전으로 초기화해준다
                        gamer.beforePoint = gamer.afterPoint;
                        gamer.beforeId = "#pic"+gamer.beforePoint;
                        //console.log("after",gamer);
                         
                           play += 1;   //-- 매 턴마다 돌아가게 한다
                           if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                              play = play % player_number;
                           }
                     //버튼이랑 select hide
                        $("#trip").hide();
                        $("#gogo").hide();
                        $("#move").show();
                        return;
                     });
                  }
                  //아니면 탈출
                  else{
                     //도착 했을때 값 추가
                        gamer.condition += 1;
                        gamer.beforePoint = gamer.afterPoint;//before Point 31로
                        
                        play += 1;   //-- 매 턴마다 돌아가게 한다
                        if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                           play = play % player_number;
                        }
                     }
                  //console.log("else after",gamer);
                     break;
                        
               default:   
                              
                  //현재 위치를 주사위 돌리기 전으로 초기화해준다
                  gamer.beforePoint = gamer.afterPoint;
               //   console.log("after",gamer);
                  
                  if(firstDice != secondDice){
                     play += 1;   //-- 매 턴마다 돌아가게 한다
                     if(play>player_number){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
                        play = play % player_number;
                     }
                   }
                  break;
            }//----------switch End
            
         }

   
//   $(beforeId).append("<img src='/board_Game/images/player1.gif'>");
   $(".board").hide();
   $("#move").hide();
   $("#trip").hide();
   $("#gogo").hide();

   $("#playerNumber").click(function(){
      player_number = $('input:radio[name="number"]:checked').val();//radio 버튼 ,몇명이서 플레이 할지 클릭
      console.log("플레이할 인원 :",player_number);
      for(let i = 1; i <= player_number; i++){
         let money="#player"+i+"_money";
         $(돈).text(startMoney);//처음 보유 재산 출력
         }
      $(".board").show();
      $("#move").show();
      $("#playerNumber").hide();
      $("#choose").hide();
      //버튼 클릭시 주사위 나옴 2개
      $(document).on("click","#move",function(){
         $("#one").empty();
         $("#two").empty();
         dice(player_number);      
      });
   })//-----------------------확인 버튼 클릭