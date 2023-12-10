/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CustomInput } from './custom-input';

const emptyContactObject = {
  name: '',
  email: '',
  number: '',
  address: '',
  website: '',
  github: '',
  linkedin: '',
};

export default function Contact({ contactObject, setContactObject, example }) {
  const [contact, setContact] = useState(emptyContactObject);
  const [editContact, setEditContact] = useState(false);

  const submitForm = (e) => {
    const inputs = [...document.querySelectorAll('form.contact input')];
    const filled = inputs.every(
      (input) => input.value !== '' && input.validity.valid,
    );
    if (filled) {
      e.preventDefault();
      setContactObject({
        name: contact.name,
        email: contact.email,
        number: contact.number,
        address: contact.address,
        website: contact.website,
        github: contact.github,
        linkedin: contact.linkedin,
      });
      setEditContact(false);
      setContact(emptyContactObject);
    }
  };

  return (
    <section>
      <h2>Details</h2>
      {contactObject && !editContact && (
        <div className="details">
          <div>
            <h3>Full Name</h3>
            <p>{contactObject.name}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{contactObject.email}</p>
          </div>
          <div>
            <h3>Contact Number</h3>
            <p>{contactObject.number}</p>
          </div>
          <div>
            <h3>Personal Website</h3>
            <p>{contactObject.website}</p>
          </div>
          <div>
            <h3>Github</h3>
            <p>{contactObject.github}</p>
          </div>
          <div>
            <h3>LinkedIn</h3>
            <p>{contactObject.linkedin}</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>{contactObject.address}</p>
          </div>
          {!example && (
            <button
              className="blue-button"
              onClick={() => {
                setContact(contactObject);
                setEditContact(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
      )}
      {(!contactObject || editContact) && (
        <form className="contact">
          <div>
            <label htmlFor="name">Full Name</label>
            <CustomInput
              id="name"
              type="text"
              field={contact}
              setField={setContact}
              value={contact.name}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <CustomInput
              id="email"
              type="email"
              field={contact}
              setField={setContact}
              value={contact.email}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="number">Contact Number</label>
            <CustomInput
              id="number"
              type="tel"
              field={contact}
              setField={setContact}
              value={contact.number}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <CustomInput
              id="address"
              type="text"
              field={contact}
              setField={setContact}
              value={contact.address}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="website">Personal Website</label>
            <CustomInput
              id="website"
              type="url"
              field={contact}
              setField={setContact}
              value={contact.website}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="github">Github</label>
            <CustomInput
              id="github"
              type="url"
              field={contact}
              setField={setContact}
              value={contact.github}
            ></CustomInput>
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn</label>
            <CustomInput
              id="linkedin"
              type="url"
              field={contact}
              setField={setContact}
              value={contact.linkedin}
            ></CustomInput>
          </div>
          {!editContact && (
            <button
              className="green-button"
              type="submit"
              onClick={(e) => {
                submitForm(e);
              }}
            >
              Save
            </button>
          )}
          {editContact && (
            <div className="edit-buttons">
              <button
                className="gray-button"
                type="button"
                onClick={() => {
                  setEditContact(false);
                  setContact(emptyContactObject);
                }}
              >
                Cancel
              </button>
              <button
                className="green-button"
                type="submit"
                onClick={(e) => {
                  submitForm(e);
                }}
              >
                Save
              </button>
            </div>
          )}
        </form>
      )}
    </section>
  );
}
