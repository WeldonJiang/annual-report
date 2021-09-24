var sint;
var stx4int;
$(function() {// 初始化内容
    amt.initTx();
    amt.initTxTitle();
    amt.initTxContent();
    // 雪
    snow();
});

var amt = {
    initTxTitle: function(){
        $("#tx-title").fadeIn(700);
    },
    initTxContent: function(){
        setTimeout(function(){
            $("#tx-content").fadeIn(700);
            // TODO 绑定鼠标滚动事件

        }, 1500);
    },
    initTx: function(){
        var tx2Width = $("#tx2").width();
        var tx3Width = $("#tx3").width();
        var bodyWidth = $("body").width();
        $("#tx2").css({left: -tx2Width});
        $("#tx3").css({left:  bodyWidth});
        $("#tx4").css({left:  bodyWidth});
        console.log(-tx2Width)
        console.log((tx3Width))
        console.log(bodyWidth)
        sint = setInterval(function(){
            amt.levelMoveRight("tx2");
            amt.levelMoveLeft("tx3");
            var tx2Left = parseInt($("#tx2").css("left").replace("px", ""));
            var tx3Left = parseInt($("#tx3").css("left").replace("px", ""));
            if(tx2Left >= 0 && tx3Left <= ($("body").width() - tx3Width)){
                clearInterval(sint);
            }
        }, 15);
        setTimeout(function(){
            stx4int = setInterval(function(){
                amt.levelMoveLeft("tx4");
                var tx4Left = parseInt($("#tx4").css("left").replace("px", ""));
                if(tx4Left <= ($("body").width() - tx4Left)){
                    clearInterval(sint);
                }
            }, 20);
        }, 1000);
        setTimeout(function(){
            $("#tx5").fadeIn(700);
        }, 2500);
    },
    levelMoveRight: function(id){// 水平右位移
        var initLocation = $("#" + id).css("left");
        if (initLocation) {
            initLocation = parseInt(initLocation);
        }
        if(initLocation >= 0){
            initLocation = 0;
        } else if(initLocation < -400) {
            initLocation += 18;
        } else if (initLocation < -200) {
            initLocation += 12;
        } else if (initLocation < -100) {
            initLocation += 10;
        } else {
            initLocation += 2;
        }
        $("#" + id).css({left: initLocation});
    },
    levelMoveLeft: function(id){// 水平左位移
        var initLocation = $("#" + id).css("left");
        var txWidth = $("#" + id).width();
        var bodyWidth = $("body").width();
        if (initLocation) {
            initLocation = parseInt(initLocation);
        }
        if(initLocation <= (bodyWidth - txWidth)){
            initLocation = (bodyWidth - txWidth);
        } else if(initLocation > (bodyWidth - txWidth + 400)) {
            initLocation -= 38;
        } else if (initLocation > (bodyWidth - txWidth + 200)) {
            initLocation -= 12;
        } else if (initLocation > (bodyWidth - txWidth + 100)) {
            initLocation -= 10;
        } else {
            initLocation -= 1;
        }
        $("#" + id).css({left: initLocation});
    }
};

function snow(){

    var canvas = document.getElementById("background");
    var ctx = canvas.getContext("2d");

    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    //Set number of snowflakes
    var numberFlakes = 400;
    var snowflakes = [];

    for(var i = 0; i < numberFlakes; i++){
        snowflakes.push({
            x: Math.random()*width,
            y: Math.random()*height,
            r: Math.random()*3+1,
            d: Math.random() + 2
        })
    }

    //Draw the snowflakes
    function drawFlakes(){
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for(var i = 0; i < numberFlakes; i++){
            var sf = snowflakes[i];
            ctx.moveTo(sf.x, sf.y);
            ctx.arc(sf.x, sf.y, sf.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    //Move the snowflakes
    function moveFlakes(){
        for(var i = 0; i < numberFlakes; i++){
            var sf = snowflakes[i];
            sf.y += Math.pow(sf.d, 2) + 1;

            if(sf.y > height){
                snowflakes[i] = {
                    x: Math.random()*width, y: 0, r: sf.r, d: sf.d
                };
            }
        }
    }
    //Snowflake animation
    setInterval(drawFlakes, 38);
}