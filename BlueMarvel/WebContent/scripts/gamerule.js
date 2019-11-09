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
               console.log("이동 전: "+beforeId);
               console.log("이 동 후: "+afterId);
           }

 