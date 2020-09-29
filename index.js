const covidTest = (choice) => {
  const formulka = "Wynik testu online na COVID-19 jest ";
  let result = "";
  switch (choice) {
    case "yes":
      result = formulka + "pozytywny. Skontaktuj się z kapłanem w celu uzyskania ostatniego namaszczenia (telefonicznie).";
      break;
    case "no":
      result = formulka + "negatywny. Jesteś zdrowy.";
      break;
    default:
      break;
  }
  alert(result);
};
