/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { CustomInput } from './custom-input';

function FormInputs({ field, setField }) {
  return (
    <>
      <div>
        <label htmlFor="institution">Institution:</label>
        <CustomInput
          id="institution"
          type="text"
          field={field}
          setField={setField}
          value={field.institution}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <CustomInput
          id="course"
          type="text"
          field={field}
          setField={setField}
          value={field.course}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="begin">Start Date:</label>
        <CustomInput
          id="begin"
          type="date"
          field={field}
          setField={setField}
          value={field.begin}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="finish">End Date:</label>
        <CustomInput
          id="finish"
          type="text"
          field={field}
          setField={setField}
          value={field.finish}
        ></CustomInput>
      </div>
      <div>
        <label htmlFor="Achievement">Achievement:</label>
        <CustomInput
          id="achievement"
          type="textarea"
          field={field}
          setField={setField}
          value={field.achievement}
        ></CustomInput>
      </div>
    </>
  );
}

function AddEducation({ educationArray, setEducationArray, setAddEducation }) {
  const [educationItem, setEducationItem] = useState({
    institution: '',
    course: '',
    begin: '',
    finish: '',
    achievement: '',
    id: uuid(),
  });

  const endNewEducation = () => {
    setEducationItem({
      institution: '',
      course: '',
      begin: '',
      finish: '',
      achievement: '',
      id: uuid(),
    });
    setAddEducation(false);
  };

  const submitNewEducation = (e) => {
    const inputs = [...document.querySelectorAll('form.education input')];
    const filled = inputs.every(
      (input) => input.value !== '' && input.validity.valid,
    );
    if (filled) {
      e.preventDefault();
      setEducationArray([
        {
          institution: educationItem.institution,
          course: educationItem.course,
          begin: educationItem.begin,
          finish: educationItem.finish,
          achievement: educationItem.achievement,
          id: uuid(),
        },
        ...educationArray,
      ]);
      endNewEducation();
    }
  };

  return (
    <form className="education expand">
      <FormInputs
        field={educationItem}
        setField={setEducationItem}
      ></FormInputs>
      <div className="edit-buttons">
        <button className="gray-button" type="button" onClick={endNewEducation}>
          Cancel
        </button>
        <button
          className="green-button"
          type="submit"
          onClick={(e) => submitNewEducation(e)}
        >
          Save
        </button>
      </div>
    </form>
  );
}

function DisplayEducation({
  educationArray,
  setEducationArray,
  example,
  setAddEducation,
}) {
  const [editItem, setEditItem] = useState(null);
  const [editItemStatic, setEditItemStatic] = useState(null);
  const [editEducation, setEditEducation] = useState(false);

  const deleteItem = (educationItem) => {
    setEducationArray(
      educationArray.filter((searchItem) => {
        return searchItem !== educationItem;
      }),
    );
  };

  const edit = (educationItem) => {
    setEditEducation(true);
    setEditItem(educationItem);
    setEditItemStatic(educationItem);
  };

  const endEdit = () => {
    setEditItem(null);
    setEditItemStatic(null);
    setEditEducation(false);
  };

  const submitEdit = (e) => {
    const inputs = [...document.querySelectorAll('form.education input')];
    const formFilledCorrectly = inputs.every(
      (input) => input.value !== '' && input.validity.valid,
    );
    if (formFilledCorrectly) {
      e.preventDefault();
      setEducationArray(
        educationArray.map((searchItem) => {
          return searchItem === editItemStatic ? editItem : searchItem;
        }),
      );
      endEdit();
    }
  };

  return (
    <>
      {!example && !editEducation && (
        <button
          className="image-and-text-button gray-button"
          onClick={() => setAddEducation(true)}
        >
          <img className="add" src="/add.png" alt="" />
          Add Education
        </button>
      )}
      {!editEducation && (
        <div className="experience-items expand">
          {educationArray.map((educationItem) => {
            return (
              <div className="details" key={educationItem.id}>
                <div>
                  <h3>Institution:</h3>
                  <p>{educationItem.institution}</p>
                </div>
                <div>
                  <h3>Course:</h3>
                  <p>{educationItem.course}</p>
                </div>
                <div>
                  <h3>Start Date:</h3>
                  <p>{educationItem.begin}</p>
                </div>
                <div>
                  <h3>End Date:</h3>
                  <p>{educationItem.finish}</p>
                </div>
                <div>
                  <h3>Achievement:</h3>
                  <p>{educationItem.achievement}</p>
                </div>
                {!example && (
                  <div className="edit-buttons">
                    <button
                      className="gray-button"
                      onClick={() => deleteItem(educationItem)}
                    >
                      Delete
                    </button>
                    <button
                      className="blue-button"
                      onClick={() => edit(educationItem)}
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
      {editEducation && (
        <form className="education expand">
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

export default function Education({
  educationArray,
  setEducationArray,
  example,
}) {
  const [showEducation, setShowEducation] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  return (
    <section className="education">
      <div className="tab">
        <h2>Education</h2>
        <button
          className="image-button"
          onClick={() => setShowEducation(!showEducation)}
        >
          <img
            className={showEducation ? '' : 'rotate'}
            src="/chevron-down.png"
            alt={showEducation ? 'Close education tab' : 'Open education tab'}
          />
        </button>
      </div>
      {showEducation && addEducation && !example && (
        <AddEducation
          educationArray={educationArray}
          setEducationArray={setEducationArray}
          setAddEducation={setAddEducation}
        ></AddEducation>
      )}
      {showEducation && !addEducation && (
        <DisplayEducation
          educationArray={educationArray}
          setEducationArray={setEducationArray}
          setAddEducation={setAddEducation}
          example={example}
        ></DisplayEducation>
      )}
    </section>
  );
}
