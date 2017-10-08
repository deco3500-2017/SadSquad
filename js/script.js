
// SENDING MESSAGES IN CHAT
$("#sendBtn").click(function(){

    if ($("#messageTextarea").val() != ""){

        writeMessage($("#messageTextarea").val(), true);
        $("#messageTextarea").val("");

    }
})


// AUTOMATIC MESSAGES
setTimeout(function() {
    
    writeMessage("hey", false);
    $("#messageTextarea").val("");

}, 900);

// FUNCTION FOR WRITING MESSAGES IN THE CHAT
function writeMessage(message, outbound){
    
    // time
    var now = new Date($.now());
    var nowFormatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    //append 
    if (outbound){
        $(".messageArea").append("<h5 class='outbound message'>" + message + "<br><span class='timestamp'>" + nowFormatted + "</span>" + "</h5>")
    } else{
        $(".messageArea").append("<h5 class='inbound message'>" + message + "<br><span class='timestamp'>" + nowFormatted + "</span>" + "</h5>")
    }
}


// ADDING GROUP MEMBER MODAL FUNCTIONALITY
$("#addGroupMember").click(function(){
    var input; // What goes inside the circle

    if ($(".studentNumInput").val() == ""){ // Dont allow nothing
        return null;
    }
    // Certain values:
    if ($(".studentNumInput").val() == 42673681){
        input = "Tony";
    } else if ($(".studentNumInput").val() == 44772912){
        input = "Annie";
    } else if ($(".studentNumInput").val() == 42833521) {
        input = "Roger";
    } else if ($(".studentNumInput").val() == 42295639) {
        input = "Tim";
    }
    else{ // default value:
        input = "John"
    }

    // Appends the circle, changes the input to added, switches back
    $(".circleContainer").append("<div class='circle'>" + input + "</div>");
    $(".studentNumInput").val("");
    $(".studentNumInput").attr("placeholder", "Added!");
    setTimeout(function() {
        $(".studentNumInput").attr("placeholder", "Student Number:");
    }, 2000);


    // ADDS THE NAME TO THE ASSIGNMENT MODAL:
    var ULchildren = $(".delegateAssignment").children();
    for (var i=0; i < ULchildren.length; i++){
        $(".delegateAssignment").children().eq(i).append("<span class='badge badge-secondary delegateBadge'>" + input + "</span>")
        console.log($(".delegateAssignment").children().eq(i))
    }
})


// ONCLICK FOR BADGES IN THE ASSIGNMENT MODAL
$(".delegateBadge").parent().on('click', 'span', function () {

    // get number to find exact row (title name)
    var whichNumberTitleIsIt = $(this).parent()[0].classList[0] - 1;

    if ($(this).hasClass("activeBadge")){ // currently clicked
        $(this).removeClass("activeBadge"); 
        var currentBadges =  $(".assignment1Text").children().eq(whichNumberTitleIsIt).children(".titleContainer").children(); // look through badges
        for (var i = 0; i < currentBadges.length; i++){
            if (currentBadges[i].innerHTML == this.innerHTML){ // if the badge matches the name, remove it
                currentBadges[i].remove();
            }
        }

    } else{ // not currently clicked

        $(this).addClass("activeBadge"); // ADD active badge

        // get number to find exact row (title name), append badge
        $(".assignment1Text").children().eq(whichNumberTitleIsIt).children(".titleContainer").append("<span class='delegateBadgeSidebar badge badge-secondary activeBadge'>" + this.innerHTML + "</span>");

        // ADD TO MY TASKS:
        if(this.innerHTML == "Me"){
            $(".myTasksBody").append("<li>" + $(this).parent()[0].innerHTML.split(":")[0] + "<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div> </div>" +"</li>")
        }
    }
    

})