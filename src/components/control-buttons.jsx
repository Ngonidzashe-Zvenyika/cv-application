/* eslint-disable react/prop-types */
export default function ControlButtons({ clearFields, example, setExample }) {
  return (
    <div className="control-buttons">
      {!example && (
        <>
          <button className="gray-button" onClick={clearFields}>
            Clear
          </button>
          <button className="green-button" onClick={window.print}>
            Print
          </button>
        </>
      )}
      <button className="blue-button" onClick={() => setExample(!example)}>
        {example ? 'Back' : 'Example'}
      </button>
    </div>
  );
}
