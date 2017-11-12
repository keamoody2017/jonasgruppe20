$(window).on("load", sidenErLoadet);



function sidenErLoadet() {
    console.log("klar")

    $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", nude);


}

function nude() {
    console.log("nude")

    $("#jonas").removeClass("");
    $("#jonas").addClass("jonasstart");

    $("#jonas").on("animationend", nude);
}

function sendnude() {
    console.lig("sendnude")

    $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", nudemodtaget);
}

function nudemodtaget() {
    console.log("nudemotaget")

    $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", valg);
}


/* INDSÆT DEL/DEL IKKE BUTTONS*/

/* valg 1 */
function noshare() {
    console.log("noshare")

     $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", jubel);
}

function jubel() {
    console.log("jubel")

     $("#jonas").removeClass("");
    $("#jonas").addClass("");
}


/*valg 2*/
function share() {
    console.log("share")

     $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", sendvidere);
}

function sendvidere() {
    console.log("sendvidere")

     $("#jonas").removeClass("");
    $("#jonas").addClass("");

    $("#jonas").on("animationend", billedetspredes);
}

function billedetspredes() {
    console.log("billedetspredes")

     $("#jonas").removeClass("");
    $("#jail").addClass("");

    $("#jail").on("animationend", tremmer);
}

function tremmer() {
    console.log("tremmer")

     $("#jail").removeClass("");
    $("#jail").addClass("");
