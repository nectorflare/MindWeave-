import "./CartSlider.css";
import { Link } from "react-router-dom";
import { FiX, FiTrash2 } from "react-icons/fi";

function CartSlider({ isOpen, onClose, cartItems, removeItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Slider */}
      <div className={`cart-slider ${isOpen ? "cart-slider-open" : ""}`}>
        {/* Header */}
        <div className="cart-slider-header">
          <h3>🛒 Your Cart ({cartItems.length})</h3>
          <button className="cart-close-btn" onClick={onClose}>
            <FiX size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-slider-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span>🛍️</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-icon">📚</div>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-slider-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>
            <Link
              to="/checkout"
              className="cart-checkout-btn"
              onClick={onClose}
            >
              Proceed to Checkout →
            </Link>
            {/* <Link to="/cart" className="cart-view-btn" onClick={onClose}>
              View Full Cart
            </Link> */}
          </div>
        )}
      </div>
    </>
  );
}

export default CartSlider;
