import { useState } from "react";
import ReactDOM from "react-dom";

function WithPortal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <main className="container">
      <h2>Modal With Portal</h2>

      <button onClick={toggleModal} className="portal-btn">
        Open Modal
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div className="portal">
            <div>
              <h2>Modal Content</h2>
              <p>This is a modal rendered using a portal.</p>
              <button onClick={toggleModal} className="close-btn">
                Close
              </button>
            </div>
          </div>,
          document.body // Appending to the body
        )}
    </main>
  );
}

export default WithPortal;
