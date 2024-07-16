import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../Components/Models.css";
import { useLocation, useNavigate } from "react-router-dom";

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

  // direct  to home  page 
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirmation = () => {
    alert(" Your order Placed succesfully")
    localStorage.removeItem("cart")
    navigate(from,{replace : true })
  }

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
                    <a
                      href="#visa"
                      id="visa-tab"
                      data-toggled="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handletabChaneg("visa")}
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                    >
                      <img
                        src="https://getsby.com/wp-content/uploads/2023/01/Visa-Mastercard-1-1024x378.png"
                        width={"80"}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      id="paypal-tab"
                      data-toggled="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handletabChaneg("paypal")}
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                    >
                      <img
                        src="https://w7.pngwing.com/pngs/289/163/png-transparent-paypal-business-logo-computer-icons-paypal-blue-text-trademark.png"
                        width={"80"}
                      />
                    </a>
                  </li>
                </ul>

                {/* contents */}

                <div className="tab-content" id="mytabcontents">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-label="visa-tab"
                  >
                    {/* visa tab content */}

                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control "
                            required
                          />
                          <span>Card Holder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control "
                            required
                            min="1"
                            max="999"
                          />{" "}
                          <i className="fa fa-eye"></i>
                          <span>Card Number</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control "
                              required
                              min="1"
                              max="999"
                            />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control "
                              required
                              min="1"
                              max="999"
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-blocked" onClick={handleOrderConfirmation}>
                            Order Now 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}

                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : "" }`}
                     id="paypal"
                     role="tabpanel"
                     aria-labelledby="paypal-tab"
                  
                  
                  >
                       <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control "
                            required
                          />
                          <span>Enter your e-mail</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="text"
                            id="text"
                            className="form-control "
                            required
                          
                          />{" "}
                          <span>Your Name</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="text"
                              id="text"
                              className="form-control "
                              required
                            
                            />
                            <span>Extra Info</span>
                          </div>
                          <div className="inputbox">
                            <input 
                          
                              type="text"
                              name="text"
                              id="text"
                              className="form-control "
                              required
                            
                            />
                            <span></span>
                        </div>
                        
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-blocked" onClick={handleOrderConfirmation}>
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div> 
            
                  </div>
                </div>
                {/* payment desclaimer */}
                
                <p className="mt-3 px-4 p-Disclaimer"> <em> Payment  disclaimer : Sorry Payment will not accept 😂 </em></p>


              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
