let cardAfterPoint = 0;
let cardMoney = 0;
let cardAfterId = 0;
let player;

function minusMoney(player,cardMoney){
	gamer.money = gamer.money - cardMoney;
 	console.log(gamer.money);
    $("#player"+player+"money").val(gamer.money);
}

function plusMoney(player,cardMoney){
	gamer.money = gamer.money + cardMoney;
 	console.log(gamer.money);
	$("#player"+player+"money").val(gamer.money);
}

function cardMove(player,cardAfterPoint, cardAfterId){
	gamer.afterPoint = cardAfterPoint;
    $("#point").val(gamer.afterPoint);
 	html = "<img class='btn-danger"+player+"' src='/BlueMarvel/images/p"+player+".png'>";
 	gamer.beforeId = "#p"+gamer.beforePoint;
 	gamer.afterId = "#p"+cardAfterId;
    $(gamer.afterId).append(html);
    $(gamer.beforeId).find(".btn-danger"+player).remove();
    gamer.beforePoint = gamer.afterPoint;
    console.log("이동후 위치: "+gamer.afterId);
}