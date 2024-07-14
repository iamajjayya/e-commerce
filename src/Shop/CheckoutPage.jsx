import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // Hnadle Tab Change

  const handletabChaneg = (tabId) => {
    setActiveTab(tabId);
  };

  const handleshow = () => {
    setShow(true);
  };

  const handleclose = () => {
    setShow(false);
  };

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleshow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleclose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>

          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav  nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#visa" className={`nav-link ${activeTab === "visa" ? "active" : ""}`}>
                      <img
                        src="https://getsby.com/wp-content/uploads/2023/01/Visa-Mastercard-1-1024x378.png"
                        width={"80"}
                      />
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
