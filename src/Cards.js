import CartBtn from "./CartBtn";
import { data } from "./data";
import RatingStar from "./RatingStar";

export default function Cards({ cartCount, setCartCount }) {
  return (
    <>
      {data.map((data, index) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
              {/* Product image */}
              {imageTop()}
              {/* Sale badge */}
              {data.sale ? saleBox() : ""}
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">{data.text}</h5>
                  {/* Product reviews */}
                  {data.star ? <RatingStar key={index} star={index} /> : ""}
                  {/* Product price */}
                  <span className="text-muted text-decoration-line-through">
                    {data.amtStrike}
                  </span>
                  {data.amt}
                </div>
              </div>
              {/* Product actions */}
              {viewOptions()}
              <CartBtn cartCount={cartCount} setCartCount={setCartCount} />
            </div>
          </div>
        );
      })}
    </>
  );

  function viewOptions() {
    return (
      <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#!">
            View options
          </a>
        </div>
      </div>
    );
  }

  function imageTop() {
    return (
      <img
        className="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />
    );
  }

  function saleBox() {
    return (
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Sale
      </div>
    );
  }
}
