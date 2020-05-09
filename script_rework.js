//enter na inpucie
const node = document.getElementById("wartosc").focus();

node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    return Submit();
  }
});
function Submit() {
  //powiedzmy ze config xD
  const existDelete = (findIdToDelete) => {
    let toDelete = document.getElementById(`${findIdToDelete}`);
    if (typeof toDelete != "undefined" && toDelete != null) {
      toDelete.parentNode.removeChild(toDelete);
    }
  };
  const maxTwoDigitsComunicate = "<h1 class='error'>Max 2 digits!</h1>";
  const enterValue = "<h1 class='error'>Enter value!</h1>";
  const giveNumberComunicate = "<h1 class='error'>I said number!</h1>";
  const noMinusNumbers = "<h1 class='error'>Numbers below 0 not allowed!</h1>";
  const noDecimals = "<h1 class='error'>No decimals!!</h1>";
  const alertShow = (komunikat) => {
    let divCreate = document.createElement("div"); // stworzenie diva
    divCreate.setAttribute("id", `alert`); // id = alert dla diva
    document.getElementById("alert-main").appendChild(divCreate);
    document.getElementById("alert").innerHTML = `${komunikat}`;
  };
  // mozgo operacji
  const userValue = document.getElementById("wartosc").value.replace(",", ".");
  if (isNaN(userValue)) {
    //sprawdzenie czy liczba === Number
    alertShow(giveNumberComunicate);
  } else if (userValue === "") {
    //wprowadz wartosc
    alertShow(enterValue);
  } else if (userValue > 99) {
    //sprawdzenie czy liczba 2 cyfrowa
    alertShow(maxTwoDigitsComunicate);
  } else if (userValue < 0) {
    //sprawdzenie czy liczba < 0
    alertShow(noMinusNumbers);
  } else if (userValue % 1 != 0) {
    //sprawdzenie czy liczba < 0
    alertShow(noDecimals);
  } else {
    existDelete("alert"); // usuniecie komunikatu 2digits, only numbers
    existDelete("piValue"); // usuniecie wartosci pi
    existDelete("piText"); //usuniecie tekstu z pozycja numeru

    const userValueLenght = userValue.length;
    const pi =
      "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593615338182796823030195203530185296899577362259941389124972177528347913151557485724245415069595082953311686172785588907509838175463746493931925506040092770167113900984882401285836160356370766010471018194295559619894676783744944825537977472684710404753464620804668425906949129331367702898915210475216205696602405803815019351125338243003558764024749647326391419927260426992279678235478163600934172164121992458631503028618297455570674983850549458858692699569092721079750930295532116534498720275596023648066549911988183479775356636980742654252786255181841757467289097777279380008164706001614524919217321721477235014144197356854816136115735255213347574184946843852332390739414333454776241686251898356948556209921922218427255025425688767179049460165346680498862723279178608578438382796797668145410095388378636095068006422512520511739298489608412848862694560424196528502221066118630674427862203919494504712371378696095636437191728746776465757396241389086583264599581339047802759011";
    const userValueInPiStart = pi.indexOf(`${userValue}`, 1);
    const userValueinPiEnd = userValueInPiStart + userValueLenght;
    let userValueinPi = "";
    for (let i = 0; i < pi.length; i++) {
      if (i >= 0 && i < userValueinPiEnd) {
        userValueinPi += pi[i];
      } else {
        break;
      }
    }
    const userValueinPiWithoutLastOne = userValueinPi.slice(0, -1);
    const userValueinPiWithoutLastTwo = userValueinPi.slice(0, -2);
    const userValueinPiLastOne = userValueinPi.slice(-1);
    const userValueinPiLastTwo = userValueinPi.slice(-2);
    //Pokazanie liczby Pi
    const addPi = document.createElement("h2"); // stworzenie h2
    addPi.setAttribute("id", "piValue"); // id = piValue
    document.getElementById("pi").appendChild(addPi); // dodanie diva addPi do pi w html
    if (userValue <= 9) {
      document.getElementById(
        "piValue"
      ).innerHTML = `${userValueinPiWithoutLastOne}<span>${userValueinPiLastOne}</span>`;
    }
    if (userValue > 9) {
      document.getElementById(
        "piValue"
      ).innerHTML = `${userValueinPiWithoutLastTwo}<span>${userValueinPiLastTwo}</span>`;
    }
    //Komentarz z pozycja
    const addPiText = document.createElement("h3"); // stworzenie h3
    addPiText.setAttribute("id", "piText"); // id = piValue
    document.getElementById("pi").appendChild(addPiText);
    userValueInPiStartForText = userValueInPiStart - 1;
    document.getElementById(
      "piText"
    ).innerHTML = `Your number is on ${userValueInPiStartForText} position!`;
  } // zakonczenie elsa (value to numer)
}
