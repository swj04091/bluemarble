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

