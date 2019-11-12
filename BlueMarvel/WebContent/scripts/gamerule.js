/**
 * 
 */
function moveUser(player, beforePoint, afterPoint, afterId, beforeId){
        	   let html = "<img class='btn-danger"+player+"' src='/BlueMarvel/images/p"+player+".png'>";
               gamer.beforeId = "#p"+beforePoint;
               gamer.afterId = "#p"+afterPoint;
               $(gamer.afterId).append(html);
               $(gamer.beforeId).find(".btn-danger"+player).remove();
               gamer.beforePoint = gamer.afterPoint;
               console.log("이동 전: "+gamer.beforeId);
               console.log("이동 후: "+gamer.afterId);
           }

function doubleDice(ran1, ran2, player, allPlayer){
	console.log("doubleDice 함수 실행 확인!");
	console.log("allPlayer : ", allPlayer);
	console.log("player : ", player);
	// 플레이어 변경
    if(ran1 != ran2){
   	 	player++;
   	 if(player>allPlayer){
   		 console.log("allPlayer : ", allPlayer);
       	 player = player-allPlayer;
     }
    } else {
	   	 console.log("더블!");
	   	 if(gamer.afterPoint == 11){
	   		player++;
	   		if(player>allPlayer){
	      		 console.log("allPlayer : ", allPlayer);
	          	 player = player-allPlayer;
	        }
	   	 }
	   	 if(gamer.afterPoint == 31 || gamer.beforePoint == 31){
	   		player++;
	   		if(player>allPlayer){
	      		 console.log("allPlayer : ", allPlayer);
	          	 player = player-allPlayer;
	        }
	   	 }
    }
    console.log("doubleDice player : ", player);
    return player;
}

function island(gamer, ran1, ran2){
	//무인도 도착
    console.log("무인도 함수 실행 확인!");
    console.log("무인도에 빠짐");
	if(gamer.round>3 || ran1 == ran2){//3번 차례가 지나거나 ,주사위가 더블일때
		console.log("무인도 탈출!");
    	gamer.round = 0;
	}else{
		console.log("무인도 잔류..");
		gamer.round+=1;
	}
    
    return gamer.round;
}
