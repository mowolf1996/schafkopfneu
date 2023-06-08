let karten =
[
  {name:"/Bilder/Eichel7.png", wert: 20 , punkte: 0},
  {name:"/Bilder/Eichel8.png", wert: 19, punkte: 0},
  {name:"/Bilder/Eichel9.png", wert: 18, punkte: 0},
  {name:"/Bilder/Eichel10.png", wert: 16, punkte: 10},
  {name:"/Bilder/EichelAss.png", wert: 15, punkte: 11},
  {name:"/Bilder/EichelUnter.png", wert: 5, punkte: 2},
  {name:"/Bilder/EichelOber.png", wert: 1, punkte: 3},
  {name:"/Bilder/EichelKönig.png", wert: 17, punkte: 4},

  {name:"/Bilder/Herz7.png", wert: 14, punkte: 0},
  {name:"/Bilder/Herz8.png", wert: 13, punkte: 0},
  {name:"/Bilder/Herz9.png", wert: 12, punkte: 0},
  {name:"/Bilder/Herz10.png", wert: 10, punkte: 10},
  {name:"/Bilder/HerzAss.png", wert: 9, punkte: 11},
  {name:"/Bilder/HerzUnter.png", wert: 7, punkte: 2},
  {name:"/Bilder/HerzOber.png", wert: 3, punkte: 3},
  {name:"/Bilder/HerzKönig.png", wert: 11, punkte: 4},

  {name:"/Bilder/Blatt7.png", wert: 26, punkte: 0},
  {name:"/Bilder/Blatt8.png", wert: 25, punkte: 0},
  {name:"/Bilder/Blatt9.png", wert: 24, punkte: 0},
  {name:"/Bilder/Blatt10.png", wert: 22, punkte: 10},
  {name:"/Bilder/BlattAss.png", wert: 21, punkte: 11},
  {name:"/Bilder/BlattUnter.png", wert: 6, punkte: 2},
  {name:"/Bilder/BlattOber.png", wert: 2, punkte: 3},
  {name:"/Bilder/BlattKönig.png", wert: 23, punkte: 4},

  {name:"/Bilder/Schell7.png", wert: 32, punkte: 0},
  {name:"/Bilder/Schell8.png", wert: 31, punkte: 0},
  {name:"/Bilder/Schell9.png", wert: 30, punkte: 0},
  {name:"/Bilder/Schell10.png", wert: 28, punkte: 10},
  {name:"/Bilder/SchellAss.png", wert: 27, punkte: 11},
  {name:"/Bilder/SchellUnter.png", wert: 8, punkte: 2},
  {name:"/Bilder/SchellOber.png", wert: 4, punkte: 3},
  {name:"/Bilder/SchellKönig.png", wert: 29, punkte: 4}, 
] //Karten Array 



// Kartenmischen
function kartenMischen(karten) 
{
  let aktindex = karten.length, temp, zufälligerindex;

  while( aktindex != 0)
  {
    zufälligerindex = Math.floor(Math.random() * aktindex);   //karte auswählen
    aktindex = aktindex -1;   //neue karte für nächsten durchgang

    temp = karten[aktindex];
    karten[aktindex] = karten[zufälligerindex];
    karten[zufälligerindex] = temp;             //tauschen der karten an der aktuelllen stelle mit der zufälligen stelle wie beim bubblesort
  }
  return karten;
}  


//Karten austeilen
const player1 = [];   //Spieler 1
for(let i = 0; i < 16 i++)  //Schleife zum austeilen der Karten
{
  player1.push(karten[i])   //mit push wird die Karte ins array "gedrückt"
};
const player1Karten = player1.map(a => a.name);  //Neues Array mit den Handkarten: map gibt kopie des ursprünglichen arrays aus

const player2 = [];   //Spieler 2
for(let i = 16; i < 32 i++)   //Schleife zum austeilen der Karten
{
  player2.push(karten[i])
};
const player2Kartren = player2.map(a => a.name);   //Neues Array mit den Handkarten



// Punkteberechnung
function punktezählen () 
{
  let player1punkte, player2punkte;
  //Spieler 1
  if (player1[0].slice(-7) == "ber.jpg") 
  {
    player1punkte += 3;
  }
  if (player1[0].slice(-7) == "ter.jpg") 
  {
    player1punkte += 2;
  }
  if (player1[0].slice(-5) == "g.jpg") 
  {
    player1punkte += 4;
  }
  if (player1[0].slice(-5) == "0.jpg") 
  {
    player1punkte += 10;
  }
  if (player1[0].slice(-5) == "s.jpg") 
  {
    player1punkte += 11;
  }

  //Spieler 2
  if (player2[0].slice(-7) == "ber.jpg") 
  {
    player2punkte += 3;
  }
  if (player2[0].slice(-7) == "ter.jpg") 
  {
    player2punkte += 2;
  }
  if (player2[0].slice(-5) == "g.jpg") 
  {
    player2punkte += 4;
  }
  if (player2[0].slice(-5) == "0.jpg") 
  {
    player2punkte += 10;
  }
  if (player2[0].slice(-5) == "s.jpg") 
  {
    player2punkte += 11;
  }
}
