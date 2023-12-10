/* eslint-disable react/prop-types */
export function CustomInput({ id, type, field, setField, value }) {
  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={id}
        type={type}
        onChange={(e) => setField({ ...field, [id]: e.target.value })}
        value={value}
        required
      ></textarea>
    );
  } else {
    return (
      <input
        id={id}
        name={id}
        type={type}
        onChange={(e) => setField({ ...field, [id]: e.target.value })}
        value={value}
        required
      ></input>
    );
  }
}
