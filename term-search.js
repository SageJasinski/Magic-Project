let Lhead = document.getElementById("lifelink");
let DeathH = document.getElementById("deathtouch");
let Defend = document.getElementById("defender");
let Ench = document.getElementById("enchant");
let Eqp = document.getElementById("equip");
let FrSt = document.getElementById("first-strike");
let Flsh = document.getElementById("flash");
let Fly = document.getElementById("flying");
let Hst = document.getElementById("haste");
let Hxpr = document.getElementById("hexproof");
let Ind = document.getElementById("indestructible");
let Men = document.getElementById("menace");
let Rch = document.getElementById("reach");
let Trmp = document.getElementById("trample");
let Tran = document.getElementById("transform");
let Vig = document.getElementById("vigilance");

let btn = document.getElementById("search");

function find() {
    let word = document.getElementById("term").value;

    if (word.toLowerCase() == 'lifelink') {
        Lhead.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'deathtouch') {
        DeathH.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'defender') {
        Defend.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'enchant') {
        Ench.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'equip') {
        Eqp.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'first strike') {
        FrSt.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'flash') {
        Flsh.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'flying') {
        Fly.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'haste') {
        Hst.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'hexproof') {
        Hxpr.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'indestructible') {
        Ind.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'menace') {
        Men.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'reach') {
        Rch.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'trample') {
        Trmp.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'transform') {
        Tran.scrollIntoView(true);
    }
    else if (word.toLowerCase() == 'vigilance') {
        Vig.scrollIntoView(true);
    }
    else {
        confirm("Looks like that term isn't on the page.\nPlease check your spelling, or perhaps we simply don't have it yet.")
    }
};

btn.addEventListener("click", find);
