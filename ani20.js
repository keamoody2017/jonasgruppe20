$(window).on("load", jonasThink);


function jonasThink() {
    console.log("jonasThink");

    $(".share_button").hide();
    $(".no_share_button").hide();
    $("#jonas_sprite").addClass("jonasthink");
    $("#jonas_container").on("animationend", tiktok);
    $("#jonas_container").on("animationend", nude);

}


function nude() {
    console.log("nude");
    $("#nude_container").off("animationend", nude);


    $("#nude_sprite").show();
    $("#nude_sprite").addClass("nude");

    $("#nude_sprite").on("animationend", valgMedMuligheder);
}

function tiktok() {
    console.log("tiktok");
    $("#tiktok")[0].play();

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
    $("#tiktok")[0].pause();
    $("#jubel")[0].play();
    $("#jubel")[0].currentTime = 6.5;


    jubel();
}

function reaction2() {
    console.log("reaction2");
    $(".share_button").hide();
    $(".no_share_button").hide();
    $(".no_share_button").off("click", reaction2);
    $("#tiktok")[0].pause();
    $("#boo")[0].play();

    share();

}

function jubel() {
    console.log("jubel");
    $("#jubel_container").off("animationend", jubel);

    $("#jonas_sprite").show();
    $("#nude_sprite").hide();
    $("#jubel_container").show();
    $("#jubel_container").addClass("jubel");
    $("#jubel_container").on("animationend", privatSnak);
}

function share() {
    console.log("share");
    $("#share_container").off("animationend", share);

    $("#jonas_sprite").hide();

    $("#nude_sprite").removeClass("nude");
    $("#nude_sprite").hide();

    $("#share_container").show();
    $("#share_sprite").addClass("share_test");

    $("mobil_container").show();
    $("mobil_sprite").addClass("mobil_anim");

    $("#tiktok")[0].pause();

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

    $("#tiktok")[0].pause();

    $("#prison_container").on("animationend", prison2);

}

function prison2() {
    console.log("prison2");

    $("#prison_container").off("animationend", prison2);

    $("#nude_container").hide();

    $("#tiktok")[0].pause();

    $("#prison_container").show();
    $("#prison_container").removeClass("prison_rotate");
    $("#prison_container").addClass("prison_fall");

    $("#prison_container").on("animationend", privatSnak);


}

function privatSnak() {
    console.log("privatSnak");
    $("#privat_container").off("animationend", privatSnak);


    $("#tiktok")[0].pause();

    $("#jubel_sprite").removeClass("jubel");
    $("#jubel_container").hide();

    $("#jonas_container").hide();
    $("#prison_container").hide();
    $("#nude_container").hide();

    console.log("i was here");
    $("#privat_container").css("display", "block");

    $("#privat_container").addClass("privat_logo");


    $("#snak_container").css("display", "block");

    $("#snak_container").addClass("snak_logo");

    $("#privat_container").on("animationend", anonymLogo);
}



function anonymLogo() {
    console.log("anonymLogo");
    $("#anonym_container").off("animationend", anonymLogo);


    $("#privat_sprite").hide();
    $("#snak_sprite").hide();

    $("#anonym_container").show();
    $("#anonym_container").addClass("anonym_animation");
}
