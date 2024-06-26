import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import { useEffect } from "react";

const CheckoutSuccessContainer = styled.div`
  text-align: center;
  margin-top: 200px;
`;

const Checkmark = styled(FaCheckCircle)`
  color: green;
  font-size: 100px;
`;

const HomeButton = styled.button`
  background-color: #f1f1f1;
  color: black;
  padding: 10px 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

function CheckoutSuccess() {
  const CheckoutSuccess = () => {
    useEffect(() => {
      document.title = "Checkout Success!";
    }, []);

    return null;
  };
  return (
    <CheckoutSuccessContainer>
      <CheckoutSuccess />
      <Checkmark />
      <h1>Thank You! </h1>
      <h2>
        Your order has been placed successfully and will be shipped as soon as
        possible
      </h2>
      <Link to={"/"}>
        <HomeButton>Return to Home Page</HomeButton>
      </Link>
    </CheckoutSuccessContainer>
  );
}

export default CheckoutSuccess;
