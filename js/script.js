$("#sendBtn").click(function(){
    console.log($("#messageTextarea").val());
   
    $(".messageArea").append("<div class='message'>" + $("#messageTextarea").val()+"</div>")

})