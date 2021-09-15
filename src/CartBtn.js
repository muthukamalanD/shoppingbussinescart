import { useState } from "react";

export default function CartBtn({ cartCount, setCartCount }) {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <>
      <button
        type="button"
        className={
          isAdd ? "btn-outline-danger btn-xs" : "btn-outline-primary btn-xs"
        }
        onClick={() => {
          setCartCount(isAdd ? cartCount - 1 : cartCount + 1);
          setIsAdd(!isAdd);
        }}
      >
        {isAdd ? "- Remove" : "+ Add"} Cart
      </button>
    </>
  );
}
