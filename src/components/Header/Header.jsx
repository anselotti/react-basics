import img from "../../assets/munkuva.jpg";
import "./Header.css";

const reactDescriptions = ["34-vuotias", "intohimoinen", "myyntihenkinen"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const adjective = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={img} alt="Anssi Kosunen" />
      <h1>Anssi Kosunen</h1>
      <p>
        Olen {adjective} webkehittäjä. Olen työskennellyt alalla noin vuoden,
        jota ennen tein työurani myyntialalla. Vahvuuteni on
        backend-kehityksessä, jota olen pääosin toteuttanut
        Laravel-frameworkilla. Lisäksi opiskelen vapaa-ajallani nykyaikaisia
        frontend-frameworkeja, kuten Reactia ja Flutteria.
      </p>
    </header>
  );
}