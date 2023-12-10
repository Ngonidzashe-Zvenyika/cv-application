/* eslint-disable react/prop-types */
import { useState } from 'react';
import exampleObject from './components/example-object';
import ControlButtons from './components/control-buttons';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Preview from './components/preview';
import './styles/App.css';

export default function App() {
  const [contactObject, setContactObject] = useState(null);
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);
  const [example, setExample] = useState(false);

  function clearFields() {
    setContactObject(null);
    setEducationArray([]);
    setExperienceArray([]);
  }

  return (
    <div className="app-container">
      <div className="input-side">
        {!example && (
          <>
            <ControlButtons
              clearFields={clearFields}
              example={example}
              setExample={setExample}
            ></ControlButtons>
            <Contact
              contactObject={contactObject}
              setContactObject={setContactObject}
              example={example}
            ></Contact>
            <Education
              educationArray={educationArray}
              setEducationArray={setEducationArray}
              example={example}
            ></Education>
            <Experience
              experienceArray={experienceArray}
              setExperienceArray={setExperienceArray}
              example={example}
            ></Experience>
          </>
        )}
        {example && (
          <>
            <ControlButtons
              clearFields={clearFields}
              example={example}
              setExample={setExample}
            ></ControlButtons>
            <Contact
              contactObject={exampleObject.contactObject}
              example={example}
            ></Contact>
            <Education
              educationArray={exampleObject.educationArray}
              example={example}
            ></Education>
            <Experience
              experienceArray={exampleObject.experienceArray}
              example={example}
            ></Experience>
          </>
        )}
      </div>
      <div className="preview-side">
        <h2>Preview</h2>
        <Preview
          previewObject={
            example
              ? exampleObject
              : {
                  contactObject,
                  educationArray,
                  experienceArray,
                }
          }
        ></Preview>
        <footer>
          Developed by{' '}
          <a href="https://github.com/Ngonidzashe-Zvenyika">
            Ngonidzashe Zvenyika
          </a>{' '}
          | Icons by{' '}
          <a rel="noreferrer" target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </footer>
      </div>
    </div>
  );
}
