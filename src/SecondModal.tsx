// @ts-nocheck

import Cards from "react-credit-cards-2";
import { useState } from "react";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function SecondModal() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const [focus, setFocus] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e: any) => {
    // setState((prev) => ({ ...prev, focus: e.target.name }));
    setFocus(e.target.name);
  };

  const [buttonLoadingPay, setButtonLoadingPay] = useState(false);

  return (
    <div>
      <div>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={focus}
        />
        <form className="flex flex-col gap-8 mt-8">
          <Input
            placeholder="Card Number"
            type="number"
            name="number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <Input
            placeholder="Full Name"
            type="name"
            name="name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <Input
            placeholder="Expiry Date"
            type="card-date"
            maxLength={5}
            name="expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <Input
            placeholder="CVV"
            type=""
            maxLength={3}
            name="cvc"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <Button
            isLoading={buttonLoadingPay}
            onClick={() => setButtonLoadingPay(true)}
            className="bg-green-500 text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SecondModal;
