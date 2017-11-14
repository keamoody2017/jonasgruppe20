$(window).on("load", jonasThink);


function jonasThink() {
    console.log("jonasThink");

    $("#jonas_sprite").addClass("jonasthink");

    $("#jonas_container").on("animationend", nude);


}


function nude() {
    console.log("nude");
    $("#nude_container").off("animationend", nude);

    $("#nude_sprite").show();
    $("#nude_sprite").addClass("nude");

    $("#nude_container").on("animationend", share);
}

function share() {
    console.log("share");
    $("#share_container").off("animationend", share);

    $("#jonas_sprite").hide();

    $("#nude_sprite").removeClass("nude");
    $("#nude_sprite").hide();

    $("#share_container").show();
    $("#share_sprite").addClass("share_test");



    $("#share_container").on("animationend", prison1);

}

function prison1() {
    console.log("prison1");
    $("#prison_container").off("animationend", prison1);


    $("#share_sprite").removeClass("share_test");
    $("#share_sprite").hide();
    $("#prison_container").show();

    $("#prison_container").addClass("prison_rotate");


    $("#prison_container").on("animationend", prison2);

}

function prison2() {
    console.log("prison2");

    $("#prison_container").off("animationend", prison2);

    $("#nude_container").hide();
    $("#jonas_sprite").show();
    $("#jonas_sprite").addClass("jonasstart");

    $("#prison_container").show();
    $("#prison_container").removeClass("prison_rotate");
    $("#prison_container").addClass("prison_fall");

    $("#prison_container").on("animationend", privatSnak);


}

function privatSnak() {
    console.log("privatSnak");
    $("#privatsnak_container").off("animationend", privatSnak);


    $("#jonas_container").hide();
    $("#prison_container").hide();
    $("#privatsnak_container").show();
    $("#privatsnak_sprite").addClass("privatsnak_animation");
}
