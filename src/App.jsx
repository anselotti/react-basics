import { useState } from "react";

import { SKILLS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import Header from "./components/Header/Header.jsx";
import Skills from "./components/Skills.jsx";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleClick(selectedTab) {
    setSelectedTopic(selectedTab);
  }

 let tabContent = <div id="tab-content">Valitse aihe.</div>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
          <p>
            <a href={EXAMPLES[selectedTopic].link} target="_blank" rel="noreferrer">Linkki</a>
          </p>
      </div>
    );
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="skills">
          <h2>Tekniikat</h2>
          <ul>
            {SKILLS.map((skill) => (<Skills key={skill.title} {...skill} />))}
          </ul>
        </section>
        <section id="examples">
          <h2>Esimerkkejä</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'osamaksuturva'} onSelect={() => handleClick('osamaksuturva')}>Osamaksuturva</TabButton>
            <TabButton isSelected={selectedTopic === 'luontotori'} onSelect={() => handleClick('luontotori')}>Luontotori</TabButton>
            <TabButton isSelected={selectedTopic === 'roosaKosunen'} onSelect={() => handleClick('roosaKosunen')}>Valokuvaaja Roosa Kosunen</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
