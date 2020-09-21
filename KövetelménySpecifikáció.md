Követelmény specifikáció
=========================

## 1 Jelenlegi helyzet leírása

Már amióta feltalálta az emberiség a tüzet, hatalmas szerepet játszott az emberek életében az aritmetika.
Sajnos mint emberi lények kevés lehetőségünk van olyan effektivitással fejben számolni 

Ilyen program már létezik, viszont szeretnék megvalósítani a saját víziónkat erről az első ránézésre teljesen közönséges projektről.

Hisszük, hogy a tevőleges, szorgos, és nem slendrián munka hozza el a jövőt. Ebből kiindulva szeretnénk az alapoktól elsajátítani ezt az iparágat. 
Ehhez egy tökéletes kezdőprojekt a számológép, mely mondhatni egy bicikli az emberi agynak.

Viszont, hogy egy teljesen lerágott projektet nyújtsunk be, hozzáadjuk saját kézségeink által szolgáltatható vonásait mely egyedülállóvá teszi a mi számológépünket az összes többitől.

## 2 Vágyálom rendszer leírása

Projektünk célja hogy új fénybe hozzá a számológépeket az end-userek szemében.

Innovatív és intuitív felhasználói felület (UI), és újszerű funkcionalitási lehetőségek segítségével új szintre fogjuk emelni a számológépek fogalmát.

Ez a szoftver képes lesz hosszú, és koherens kifejezések kiértékelésére, számolási history megtekintésére és újrafelhasználhatóságára, ezen felül magas szintű aritmetikai számolásokat is lehetővé fog tenni (pl.: faktoriális számolás, és integrálás).

Modern dizájn és reszponzív megjelenítés segítségével elérjük a könnyű kezelhetőséget nem csak az fiatalabb és középkorú generációnak, de megcélozzuk a 69+ éves emberek tömegét is.

Célunk hogy soha többé ne kelljen újra kézi számológépet használni; a jövő a számítogépekben és az informatikában van, így azzal, hogy egy Angular webapplikáció formájában fogjuk megvalósítani, elérjük a könnyű elérhetőség legmagasabb fokát.

## 3 A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
3.1 Pályazat

A pályázatíró feladatkörébe tartozik az új pályázati lehetőségek felkutatása,
az erről történő tájékoztatás adott vállalatok és partnerek felé,illetve igény esetén a pályázatok megírása magyar vagy idegen nyelven. 

A pályázatíró feladata a pályázati úton történő forrásszerzés az adott vállalat vagy szervezet fejlesztési céljainak megvalósítása érdekében.

Munkájára elsősorban a pályázatok sokszor bonyolult megszövegezése, a vonatkozó jogszabályok és eljárások ismeretének igénye miatt van szükség.

3.2 Törvények

A törvény mint jogi fogalom a jogszabályok hierarchiájában az alkotmány után a legfőbb jogszabályt jelenti, amelyet csak az adott állam törvényhozása alkothat meg, módosíthat vagy helyezhet hatályon kívül.

A köznyelv törvény alatt esetenként a jog egészét, bármelyik jogszabályt illetve a bíróságot is érti.

3.3 Szabványok

A szabvány elismert szervezet által alkotott vagy jóváhagyott, közmegegyezéssel elfogadott olyan műszaki dokumentum, amely tevékenységre vagy azok eredményére vonatkozik, és olyan általános és ismételten alkalmazható szabályokat, útmutatókat vagy jellemzőket tartalmaz, amelyek alkalmazásával a rendező hatás az adott feltételek között a legkedvezőbb.

## 5 Jelenlegi üzleti folyamatok modellje

5.1 Számolási müveletek: 

5.1.1 Számolási igény bekérése => online számológépének megnyitása => számolási müvelet elvégzése

5.1.2 Syntax error => értelmezhetetlen karakterk vagy müvleti jelek => hiba megjelenítése 

5.2 Személyre szabás:
 
5.2.1 A számológép bizonyos esetekben nem megfelelő => különböző helyen lévő beállítás elvégzése => bonyolult testreszabás müveletek

6 Igényelt üzleti folyamatok modellje
-------------------------------------
5.1 Kezdő oldal:

5.1.1 Számológép => Infórmációk a program alkotókról => Idézet

5.2 Számolási müveletek: 

5.2.1 Számolási igény bekérése => Web oldal számológép megnyitása => számolási müvelet elvégzése

5.2.2 Syntax error => értelmezhetetlen karakterk vagy müvleti jelek => hiba megjelenítése 

5.3 Személyre szabás:
 
5.3.1 A számológép minden esetben személyre szabható => egy helyen lévő beállítás elvégzése => egyszerüen testreszabható

## 7 Követelménylista
1. UI
2. Menő design
3. Grafikus megjelenítés
    - Végzett operáció megjelenítése
    - Gombok megkülönböztetése
4. Matematikai műveletek
    - Összeadás
    - Kivonás
    - Szorzás
    - Osztás
    - Reciprok
    - Gyökvonás
    - Szorzás
    - Hatványozás
    - Reciprok
    - Trigonometrikus műveletek
5. Clear gomb

## 8 Irányított és szabad szöveges riportok szövege

#### Hogyan használható az online számológép?

Pontosan úgy, ahogy egy számológép általában.

 Egyszerűen gépeld be a számokat és műveleteket, majd kattints az egyenlőség gombra.
 
 A számológép használható a gombokra történő kattintással, mobiltelefonon érintésükkel, illetve a számítógép billentyűzetéről is. Ha egy-egy gombra rákattintasz, akkor a számológép billentyűjének színe egy pillanatra fehérre vált, jelezve ezzel, hogy sikeresen megnyomtad az adott gombot.
 
 A számológépben megjelenő számok kimásolhatók és természetesen be is másolhatók a Ctrl+C, illetve a Ctrl+V billentyűkombinációk használatával.
 
 Az online számológép egyébként megjegyzi az utolsó állapotot, tehát ha visszatérsz, az utoljára végrehajtott művelet eredménye látható (ha csak nem törölted azt legutóbb).

## 9 Fogalomszótár

#### A trigonometrikus függvények:
Eredetileg szögfüggvények egy derékszögű háromszög egy szöge és két oldalának hányadosa közötti összefüggést írják le.

A szögfüggvények fontosak többek között a geometriai számításoknál, különféle mozgások és a periodikus jelenségek leírásánál, és a műszaki élet számtalan területén.

#### A gyökvonás:
Egy matematikai művelet, a hatványozás egyik megfordított inverz művelete a másik a logaritmus.
 
Mikor egy számból n-edik gyököt vonunk, olyan számot keresünk, amelyet az n-edik hatványra emelve visszaadja az eredeti számot.