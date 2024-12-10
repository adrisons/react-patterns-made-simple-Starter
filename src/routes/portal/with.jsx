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

      {/* TODO: Implement Portal Pattern */}
    </main>
  );
}

export default WithPortal;
