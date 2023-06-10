let karten =
  [
    { name: "/Bilder/Eichel7.png", wert: 20, punkte: 0, farbe: "Eichel" },
    { name: "/Bilder/Eichel8.png", wert: 19, punkte: 0, farbe: "Eichel" },
    { name: "/Bilder/Eichel9.png", wert: 18, punkte: 0, farbe: "Eichel" },
    { name: "/Bilder/Eichel10.png", wert: 16, punkte: 10, farbe: "Eichel" },
    { name: "/Bilder/EichelAss.png", wert: 15, punkte: 11, farbe: "Eichel" },
    { name: "/Bilder/EichelUnter.png", wert: 5, punkte: 2, farbe: "Eichel" },
    { name: "/Bilder/EichelOber.png", wert: 1, punkte: 3, farbe: "Eichel" },
    { name: "/Bilder/EichelKönig.png", wert: 17, punkte: 4, farbe: "Eichel" },

    { name: "/Bilder/Herz7.png", wert: 14, punkte: 0, farbe: "Herz" },
    { name: "/Bilder/Herz8.png", wert: 13, punkte: 0, farbe: "Herz" },
    { name: "/Bilder/Herz9.png", wert: 12, punkte: 0, farbe: "Herz" },
    { name: "/Bilder/Herz10.png", wert: 10, punkte: 10, farbe: "Herz" },
    { name: "/Bilder/HerzAss.png", wert: 9, punkte: 11, farbe: "Herz" },
    { name: "/Bilder/HerzUnter.png", wert: 7, punkte: 2, farbe: "Herz" },
    { name: "/Bilder/HerzOber.png", wert: 3, punkte: 3, farbe: "Herz" },
    { name: "/Bilder/HerzKönig.png", wert: 11, punkte: 4, farbe: "Herz" },

    { name: "/Bilder/Blatt7.png", wert: 26, punkte: 0, farbe: "Blatt" },
    { name: "/Bilder/Blatt8.png", wert: 25, punkte: 0, farbe: "Blatt" },
    { name: "/Bilder/Blatt9.png", wert: 24, punkte: 0, farbe: "Blatt" },
    { name: "/Bilder/Blatt10.png", wert: 22, punkte: 10, farbe: "Blatt" },
    { name: "/Bilder/BlattAss.png", wert: 21, punkte: 11, farbe: "Blatt" },
    { name: "/Bilder/BlattUnter.png", wert: 6, punkte: 2, farbe: "Blatt" },
    { name: "/Bilder/BlattOber.png", wert: 2, punkte: 3, farbe: "Blatt" },
    { name: "/Bilder/BlattKönig.png", wert: 23, punkte: 4, farbe: "Blatt" },

    { name: "/Bilder/Schell7.png", wert: 32, punkte: 0, farbe: "Schell" },
    { name: "/Bilder/Schell8.png", wert: 31, punkte: 0, farbe: "Schell" },
    { name: "/Bilder/Schell9.png", wert: 30, punkte: 0, farbe: "Schell" },
    { name: "/Bilder/Schell10.png", wert: 28, punkte: 10, farbe: "Schell" },
    { name: "/Bilder/SchellAss.png", wert: 27, punkte: 11, farbe: "Schell" },
    { name: "/Bilder/SchellUnter.png", wert: 8, punkte: 2, farbe: "Schell" },
    { name: "/Bilder/SchellOber.png", wert: 4, punkte: 3, farbe: "Schell" },
    { name: "/Bilder/SchellKönig.png", wert: 29, punkte: 4, farbe: "Schell" },
  ] //Karten Array 

const trumpffarbe = "Herz";
let gewonneneKartenSpieler1 = [];
let gewonneneKartenSpieler2 = [];
let punktespieler1 = 0;
let punktespieler2 = 0;
var wertp1 = 0;
var wertp2 = 0;
var farbe1;
var farbe2;
let prevCard1 = null;
let prevCard2 = null;
let ausgabe = "";

// Kartenmischen
function kartenMischen(karten) {
  let aktindex = karten.length, temp, zufälligerindex;

  while (aktindex != 0) {
    zufälligerindex = Math.floor(Math.random() * aktindex);   //karte auswählen
    aktindex = aktindex - 1;   //neue karte für nächsten durchgang

    temp = karten[aktindex];
    karten[aktindex] = karten[zufälligerindex];
    karten[zufälligerindex] = temp;             //tauschen der karten an der aktuelllen stelle mit der zufälligen stelle wie beim bubblesort
  }
  return karten;
}
kartenMischen(karten);

//Karten austeilen
const player1 = [];   //Spieler 1
for (let i = 0; i < 16; i++)  //Schleife zum austeilen der Karten
{
  player1.push(karten[i])   //mit push wird die Karte ins array "gedrückt"
};
const player1Karten = player1.map(a => a.name);  //Neues Array mit den Handkarten: map gibt kopie des ursprünglichen arrays aus

const player2 = [];   //Spieler 2
for (let i = 16; i < 32; i++)   //Schleife zum austeilen der Karten
{
  player2.push(karten[i])
};
const player2Karten = player2.map(a => a.name);   //Neues Array mit den Handkarten

//Funktion zum Kartenvergleich
function vergleicheKarten() {
  if (prevCard1 !== null && prevCard2 !== null) {
    if (farbe1 === farbe2) {
      if (wertp1 < wertp2) {
        $(".log").html("Spieler 1 gewinnt den Stich. Spieler 1 fängt an!");
        gewonneneKartenSpieler1.push(player1.find(karte => karte.name === prevCard1.data("karte")));
        gewonneneKartenSpieler1.push(player2.find(karte => karte.name === prevCard2.data("karte")));
        anfang = 1;
        console.log(anfang);
        console.log(gewonneneKartenSpieler1);
      } else if (wertp1 > wertp2) {
        $(".log").html("Spieler 2 gewinnt den Stich. Spieler 2 fängt an!");
        gewonneneKartenSpieler2.push(player1.find(karte => karte.name === prevCard1.data("karte")));
        gewonneneKartenSpieler2.push(player2.find(karte => karte.name === prevCard2.data("karte")));
        console.log(gewonneneKartenSpieler2);
        anfang = -1;
        console.log(anfang);
      }
    } else if (farbe1 === trumpffarbe && wertp1 < wertp2) {
      $(".log").html("Spieler 1 gewinnt den Stich. Spieler 1 fängt an!");
      gewonneneKartenSpieler1.push(player1.find(karte => karte.name === prevCard1.data("karte")));
      gewonneneKartenSpieler1.push(player2.find(karte => karte.name === prevCard2.data("karte")));
      console.log(gewonneneKartenSpieler1);
      anfang = 1;
      console.log(anfang);
    } else if (farbe2 === trumpffarbe && wertp2 < wertp1) {
      $(".log").html("Spieler 2 gewinnt den Stich. Spieler 2 fängt an!");
      gewonneneKartenSpieler2.push(player1.find(karte => karte.name === prevCard1.data("karte")));
      gewonneneKartenSpieler2.push(player2.find(karte => karte.name === prevCard2.data("karte")));
      console.log(gewonneneKartenSpieler2);
      anfang = -1;
      console.log(anfang);
    } else {
      if (anfang = 1) {
        $(".log").html("Spieler 1 gewinnt den Stich. Spieler 1 fängt an!");
        gewonneneKartenSpieler1.push(player1.find(karte => karte.name === prevCard1.data("karte")));
        gewonneneKartenSpieler1.push(player2.find(karte => karte.name === prevCard2.data("karte")));
        console.log(gewonneneKartenSpieler1);
        console.log(anfang);
        anfang = 0;
      }
      else {
        $(".log").html("Spieler 2 gewinnt den Stich. Spieler 2 fängt an!");
        gewonneneKartenSpieler2.push(player1.find(karte => karte.name === prevCard1.data("karte")));
        gewonneneKartenSpieler2.push(player2.find(karte => karte.name === prevCard2.data("karte")));
        console.log(gewonneneKartenSpieler2);
        console.log(anfang);
        anfang = 0;
      }
    }
    prevCard1 = null;
    prevCard2 = null;
    wertp1 = null;
    wertp2 = null;
    farbe1 = null;
    farbe2 = null;
    anfang = 0;

    // Punkte zählen fertig
    if (gewonneneKartenSpieler1.length + gewonneneKartenSpieler2.length === 32) {
      punktezählen(gewonneneKartenSpieler1, gewonneneKartenSpieler2);
    }
  }
}


//spielfunktion
function setGame() {
  let j = -1;
  for (let i = 0; i < 16; i++) {
    if (i % 4 == 0) {
      j++;
    }
    $("#p1 .deck" + j).append('<img src="' + player1[i].name + '" data-wert="' + player1[i].wert + '" data-karte="' + player1[i].name + '" data-farbe="' + player1[i].farbe + '">');
    $("#p2 .deck" + j).append('<img src="' + player2[i].name + '" data-wert="' + player2[i].wert + '" data-karte="' + player2[i].name + '" data-farbe="' + player2[i].farbe + '">');
  }
  $("#p1 img").click(function () {
    if ($(this).css("filter") == "brightness(0)") {
      $(this).css("filter", "brightness(1)");
    }
    else {
      prevCard1 = $(this);
      wertp1 = $(this).data("wert");
      farbe1 = $(this).data("farbe");
      console.log(farbe1);
      $("#p2").css("pointer-events", "auto");
      // Bewege die angeklickte Karte
      $(this).css({
        "position": "absolute",
        "left": "40%",
        "top": "50%",
        "transform": "translate(-50%, -50%)"
      });
      $(this).appendTo("#moveTargetp1");
      vergleicheKarten();
    }
  });

  $("#p2 img").click(function () {
    if ($(this).css("filter") == "brightness(0)") {
      $(this).css("filter", "brightness(1)");
    }
    else {
      prevCard2 = $(this);
      wertp2 = $(this).data("wert");
      farbe2 = $(this).data("farbe");
      console.log(farbe2);
      // Karte bewegen
      $(this).css({
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%, -50%)"
      });
      $(this).appendTo("#moveTargetp2");
      vergleicheKarten();
    }
  });

}
setGame();

//funktion zum punktezählen
function punktezählen(gewonneneKartenSpieler1, gewonneneKartenSpieler2) {
  let punktespieler1 = 0;
  let punktespieler2 = 0;

  // Zähle die Punkte für Spieler 1
  for (let karte of gewonneneKartenSpieler1) {
    punktespieler1 += karte.punkte;
  }

  // Zähle die Punkte für Spieler 2
  for (let karte of gewonneneKartenSpieler2) {
    punktespieler2 += karte.punkte;
  }

  console.log("Punkte Spieler 1:", punktespieler1);
  console.log("Punkte Spieler 2:", punktespieler2);



  if (punktespieler1 > punktespieler2) {
    if (punktespieler1 > 91 && punktespieler2 < 30) {
      // Spieler 1 hat mit Schneider gewonnen
      ausgabe = "Spieler 1 hat mit Schneider gewonnen!";
    } else if (punktespieler1 === 120 && punktespieler2 === 0) {
      // Spieler 1 hat seinen Gegner vernichtet
      ausgabe = "Spieler 1 hat seinen Gegner vernichtet, SCHWARZ!";
    } else {
      // Spieler 1 hat gewonnen
      ausgabe = "Spieler 1 hat gewonnen!";
    }
  } else if (punktespieler2 > punktespieler1) {
    if (punktespieler2 > 91 && punktespieler1 < 30) {
      // Spieler 2 hat mit Schneider gewonnen
      ausgabe = "Spieler 2 hat mit Schneider gewonnen!";
    } else if (punktespieler2 === 120 && punktespieler1 === 0) {
      // Spieler 2 hat seinen Gegner vernichtet
      ausgabe = "Spieler 2 hat seinen Gegner vernichtet, SCHWARZ!";
    } else {
      // Spieler 2 hat gewonnen
      ausgabe = "Spieler 2 hat gewonnen!";
    }
  } else {
    // Unentschieden
    ausgabe = "Unentschieden";
  }

  // Popup-Fenster öffnen
  Popup(ausgabe);
}

//funktion zum erzeugen des popups
function Popup(ausgabe) {
  const popupWindow = window.open("", "Popup", "width=500,height=200");
  popupWindow.document.write("<html><head><title>Popup</title></head><body>");
  popupWindow.document.write("<h1>" + ausgabe + "</h1>");
  popupWindow.document.write("</body></html>");
}

