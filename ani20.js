$(window).on("load", jonasThink);


function jonasThink() {
    console.log("jonasThink");

    $(".share_button").hide();
    $(".no_share_button").hide();
    $("#jonas_sprite").addClass("jonasthink");

    $("#jonas_container").on("animationend", nude);

}


function nude() {
    console.log("nude");
    $("#nude_container").off("animationend", nude);

    $("#nude_sprite").show();
    $("#nude_sprite").addClass("nude");

    $("#nude_sprite").on("animationend", valgMedMuligheder);
}



function valgMedMuligheder() {
    $(".share_button").show();
    $(".no_share_button").show();
    $(".share_button").on("click", reaction1);
    $(".no_share_button").on("click", reaction2);


}

function reaction1() {
    console.log("reaction1");
    $(".share_button").hide();
    $(".no_share_button").hide();
    $(".share_button").off("click", reaction1);

    jubel();
}

function reaction2() {
    console.log("reaction2");
    $(".share_button").hide();
    $(".no_share_button").hide();
    $(".no_share_button").off("click", reaction2);

    share();

}

function jubel() {
    console.log("jubel");
    $("#jonas_sprite").hide();
    $("#jubel_container").show();
    $("#jubel_sprite").addClass("jubel");
    privatSnak();
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

    $("#jonas_sprite").show();
    $("#nude_container").hide();

    $("#prison_container").addClass("prison_rotate");


    $("#prison_container").on("animationend", prison2);

}

function prison2() {
    console.log("prison2");

    $("#prison_container").off("animationend", prison2);

    $("#nude_container").hide();


    $("#prison_container").show();
    $("#prison_container").removeClass("prison_rotate");
    $("#prison_container").addClass("prison_fall");

    $("#prison_container").on("animationend", privatSnak);


}

function privatSnak() {
    console.log("privatSnak");
    $("#privat_container").off("animationend", privatSnak);




    $("#jonas_container").hide();
    $("#prison_container").hide();
    $("#nude_container").hide();

    $("privat_container").show();
    $("snak_container").show();

    $("privat_sprite").addClass("privat_logo");
    $("snak_sprite").addClass("snak_animation");

    $("#privat_container").on("animationend", anonymLogo);
}

function anonymLogo() {
    console.log("anonymLogo");
    $("#anonym_container").off("animationend", anonymLogo);


    $("privat_sprite").hide();
    $("snak_sprite").hide();

    $("#anonym_container").show();
    $("#anonym_sprite").addClass("anonym_animation");
}
