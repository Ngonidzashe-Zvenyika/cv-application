/* eslint-disable react/prop-types */
import { format, parseISO } from 'date-fns';

export default function Preview({ previewObject }) {
  const contactObject = previewObject.contactObject;
  const educationArray = previewObject.educationArray;
  const experienceArray = previewObject.experienceArray;

  return (
    <div className="preview">
      {contactObject && (
        <section>
          <h1 className="name">{contactObject.name}</h1>
          <h2>Details</h2>
          {contactObject && (
            <>
              <div className="contact-item">
                <img src="/email.png" alt="" />
                <p>{contactObject.email}</p>
              </div>
              <div className="contact-item">
                <img src="/phone.png" alt="" />
                <p>{contactObject.number}</p>
              </div>
              <div className="contact-item">
                <img src="/location.png" alt="" />
                <p>{contactObject.address}</p>
              </div>
              <div className="contact-item">
                <img src="/link.png" alt="" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={contactObject.website}
                >
                  Personal Website
                </a>
              </div>
              <div className="contact-item">
                <img src="/github.png" alt="" />
                <a rel="noreferrer" target="_blank" href={contactObject.github}>
                  GitHub
                </a>
              </div>
              <div className="contact-item">
                <img src="/linkedin.png" alt="" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={contactObject.linkedin}
                >
                  LinkedIn
                </a>
              </div>
            </>
          )}
        </section>
      )}
      {educationArray.length > 0 && (
        <section>
          <h2>Education</h2>
          {educationArray.map((educationItem) => {
            return (
              <div key={educationItem.id} className="details">
                <div>
                  <h3>{educationItem.course}</h3>
                  <p>Institution: {educationItem.institution}</p>
                  <p>
                    Period:{' '}
                    {educationItem.begin !== ''
                      ? format(parseISO(educationItem.begin), 'MMMM y')
                      : ''}{' '}
                    - {educationItem.finish}{' '}
                  </p>
                  <p>Achievement: {educationItem.achievement}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}
      {experienceArray.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experienceArray.map((experienceItem) => {
            return (
              <div key={experienceItem.id} className="details">
                <div>
                  <h3>{experienceItem.position}</h3>
                  <p>Organisation: {experienceItem.company}</p>
                  <p>
                    Period:{' '}
                    {experienceItem.start !== ''
                      ? format(parseISO(experienceItem.start), 'MMMM y')
                      : ''}{' '}
                    - {experienceItem.end}{' '}
                  </p>
                  <p>Description: {experienceItem.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
