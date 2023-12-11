/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { CustomInput } from './custom-input';

function FormInputs({ field, setField }) {
  return (
    <>
      <div>
        <label htmlFor="company">Organisation</label>
        <CustomInput
          id="company"
          type="text"
          field={field}
          setField={setField}
          value={field.company}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <CustomInput
          id="position"
          type="text"
          field={field}
          setField={setField}
          value={field.position}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="start">Start Date</label>
        <CustomInput
          id="start"
          type="date"
          field={field}
          setField={setField}
          value={field.start}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="end">End Date</label>
        <CustomInput
          id="end"
          type="text"
          field={field}
          setField={setField}
          value={field.end}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <CustomInput
          id="description"
          type="textarea"
          field={field}
          setField={setField}
          value={field.description}
        ></CustomInput>
      </div>
    </>
  );
}

function AddExperience({
  experienceArray,
  setExperienceArray,
  setAddExperience,
}) {
  const [experienceItem, setExperienceItem] = useState({
    company: '',
    position: '',
    start: '',
    end: '',
    description: '',
    id: uuid(),
  });

  const endNewExperience = () => {
    setExperienceItem({
      company: '',
      position: '',
      start: '',
      end: '',
      description: '',
      id: uuid(),
    });
    setAddExperience(false);
  };

  const submitNewExperience = (e) => {
    const inputs = [
      ...document.querySelectorAll('form.experience input'),
      document.querySelector('form.experience textarea'),
    ];
    const filled = inputs.every(
      (input) => input.value !== '' && input.validity.valid,
    );
    if (filled) {
      e.preventDefault();
      setExperienceArray([
        {
          company: experienceItem.company,
          position: experienceItem.position,
          start: experienceItem.start,
          end: experienceItem.end,
          description: experienceItem.description,
          id: uuid(),
        },
        ...experienceArray,
      ]);
      endNewExperience();
    }
  };

  return (
    <form className="experience expand">
      <FormInputs
        field={experienceItem}
        setField={setExperienceItem}
      ></FormInputs>
      <div className="edit-buttons">
        <button
          className="gray-button"
          type="button"
          onClick={endNewExperience}
        >
          Cancel
        </button>
        <button
          className="green-button"
          type="submit"
          onClick={(e) => submitNewExperience(e)}
        >
          Save
        </button>
      </div>
    </form>
  );
}

function DisplayExperience({
  experienceArray,
  setExperienceArray,
  example,
  setAddExperience,
}) {
  const [editItem, setEditItem] = useState(null);
  const [editItemStatic, setEditItemStatic] = useState(null);
  const [editExperience, setEditExperience] = useState(false);

  const deleteItem = (experienceItem) => {
    setExperienceArray(
      experienceArray.filter((searchItem) => {
        return searchItem !== experienceItem;
      }),
    );
  };

  const edit = (experienceItem) => {
    setEditExperience(true);
    setEditItem(experienceItem);
    setEditItemStatic(experienceItem);
  };

  const endEdit = () => {
    setEditItem(null);
    setEditItemStatic(null);
    setEditExperience(false);
  };

  const submitEdit = (e) => {
    const inputs = [
      ...document.querySelectorAll('form.experience input'),
      document.querySelector('form.experience textarea'),
    ];
    const formFilledCorrectly = inputs.every(
      (input) => input.value !== '' && input.validity.valid,
    );
    if (formFilledCorrectly) {
      e.preventDefault();
      setExperienceArray(
        experienceArray.map((searchItem) => {
          return searchItem === editItemStatic ? editItem : searchItem;
        }),
      );
      endEdit();
    }
  };
  return (
    <>
      {!example && !editExperience && (
        <button
          className="image-and-text-button gray-button"
          onClick={() => setAddExperience(true)}
        >
          <img src="/add.png" alt="" />
          Add Experience
        </button>
      )}
      {!editExperience && (
        <div className="experience-items expand">
          {experienceArray.map((experienceItem) => {
            return (
              <div className="details" key={experienceItem.id}>
                <div>
                  <h3>Organisation</h3>
                  <p>{experienceItem.company}</p>
                </div>
                <div>
                  <h3>Position</h3>
                  <p>{experienceItem.position}</p>
                </div>
                <div>
                  <h3>Start Date</h3>
                  <p>{experienceItem.start}</p>
                </div>
                <div>
                  <h3>End Date</h3>
                  <p>{experienceItem.end}</p>
                </div>
                <div>
                  <h3>Description</h3>
                  <p>{experienceItem.description}</p>
                </div>
                {!example && (
                  <div className="edit-buttons">
                    <button
                      className="gray-button"
                      onClick={() => deleteItem(experienceItem)}
                    >
                      Delete
                    </button>
                    <button
                      className="blue-button"
                      onClick={() => edit(experienceItem)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {editExperience && (
        <form className="experience expand">
          <FormInputs field={editItem} setField={setEditItem}></FormInputs>
          <div className="edit-buttons">
            <button className="gray-button" type="button" onClick={endEdit}>
              Cancel
            </button>
            <button
              className="green-button"
              type="submit"
              onClick={(e) => submitEdit(e)}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default function Experience({
  experienceArray,
  setExperienceArray,
  example,
}) {
  const [showExperience, setShowExperience] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  return (
    <section className="experience">
      <div className="tab">
        <h2>Experience</h2>
        <button
          className="image-button"
          onClick={() => setShowExperience(!showExperience)}
        >
          <img
            className={showExperience ? '' : 'rotate'}
            src="/chevron-down.png"
            alt={
              showExperience ? 'Close experience tab' : 'Open experience tab'
            }
          />
        </button>
      </div>
      {showExperience && addExperience && (
        <AddExperience
          experienceArray={experienceArray}
          setExperienceArray={setExperienceArray}
          setAddExperience={setAddExperience}
        ></AddExperience>
      )}
      {showExperience && !addExperience && (
        <DisplayExperience
          experienceArray={experienceArray}
          setExperienceArray={setExperienceArray}
          setAddExperience={setAddExperience}
          example={example}
        ></DisplayExperience>
      )}
    </section>
  );
}
