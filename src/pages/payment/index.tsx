import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./payment.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { plan } = useParams();
  let amount = 0;
  if (plan === "monthly") amount = 1500;
  else if (plan === "annual") amount = 12000;
  else navigate("/plans", { replace: true });

  const user = useSelector((state: any) => state.user.user);
  const [showOverlay, setShowOverlay] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amountSent: amount.toString(),
    firstName: user?.firstname || "",
    lastName: user?.lastname || "",
    email: user?.email || "",
    receipt: "",
    phoneNumber: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!user) navigate("/auth/login", { replace: true });
  }, []);

  useEffect(() => {
    if (plan === "free-trial") {
      navigate("/dashboard");
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOverlaySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("amount", paymentDetails.amountSent);
    formData.append("first_name", paymentDetails.firstName);
    formData.append("last_name", paymentDetails.lastName);
    formData.append("email", paymentDetails.email);
    if (
      imageRef.current &&
      imageRef.current.files &&
      imageRef.current.files.length > 0
    )
      formData.append("receipt", imageRef.current.files[0]);
    formData.append("phone_number", paymentDetails.phoneNumber);

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/15603921/3pty782",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      const data = await response.text();
      console.log(data);
      toast.success("Your payment has been confirmed!", {
        onClose: () => navigate("/dashboard", { replace: true }),
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Make Payment</h2>
      <div className="bank-details">
        <h3>Transfer Details:</h3>
        <p>
          Bank Name: <span>FCMB</span>
        </p>
        <p>
          Account No: <span>4488691012</span>
        </p>
        <p>
          Name: <span>Aderinto Damilola</span>
        </p>
        <p>
          Amount:{" "}
          <span>
            NGN {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </p>
        <p>
          After making the transfer, click the button below to confirm payment:
        </p>
        <button onClick={() => setShowOverlay(true)}>Confirm Payment</button>
      </div>
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <h3>Payment Confirmation</h3>
            <form onSubmit={handleOverlaySubmit}>
              <div className="form-group">
                <label htmlFor="amountSent">
                  Enter Amount Sent (Numbers Only) *
                </label>
                <input
                  type="text"
                  id="amountSent"
                  name="amountSent"
                  value={paymentDetails.amountSent}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={paymentDetails.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={paymentDetails.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={paymentDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="receipt">Receipt *</label>
                <input
                  type="file"
                  id="receipt"
                  name="receipt"
                  accept="image/*"
                  onChange={handleChange}
                  ref={imageRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={paymentDetails.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Confirm Payment</button>
            </form>
          </div>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Payment;
