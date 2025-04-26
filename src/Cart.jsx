import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
  <div>
    <div className="bg-light py-2 px-4 d-flex justify-content-between align-items-center border-bottom fixed-top">

      <div className="d-flex align-items-center">
         <span className="me-2">📰</span>
         <strong>Xin chào, <span className="text-dark">20227226</span></strong>
       </div>


        <div className="d-flex gap-2">
       <Link to="/gio-hang" className="btn btn-outline-secondary btn-sm">
           Xem giỏ hàng
       </Link>
       <Link to="/doi-mat-khau" className="btn btn-outline-secondary btn-sm">
          Đổi mật khẩu
       </Link>
       <Link to="/phan-hoi" className="btn btn-outline-info btn-sm">
          Gửi phản hồi
       </Link>
      <Link to="/home2" className="btn btn-outline-danger btn-sm">
           Đăng xuất
      </Link>
        </div>
    </div>
    <div style={{ paddingTop: "80px" }}>
    <div className="container mt-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/home")}
      >
        ← Quay lại
      </button>

      <h5>Giỏ hàng của bạn</h5>
      <p>Items: {totalItems}</p>
      <p>
        Total: <strong>{totalPrice.toLocaleString()} VND</strong>
      </p>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Giỏ hàng trống</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} VND</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()} VND</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteFromCart(item)}
                    >
                      ❌ Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {cartItems.length > 0 && (
      <div className="d-flex justify-content-end">
      <button className="btn btn-success" onClick={() => navigate("/dat-hang")}>
        Đặt hàng
      </button>
    </div>
  )}
    </div>
    </div>
  </div>
  );

}

export default Cart;


