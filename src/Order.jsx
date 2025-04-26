import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function Order() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // giả lập API thành công
      
      toast.success("Đặt hàng thành công!");
    
            
      navigate("/home"); 
    
    } catch (error) {
      toast.error("Đặt hàng thất bại: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
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
    <div className="container my-5">
      <h2 className="text-center mb-4">Xác nhận đơn hàng</h2>

      <div className="row">
        {/* Giỏ hàng */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-light">
              <h4 className="mb-0">Giỏ hàng của bạn</h4>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <p className="text-muted">Giỏ hàng trống</p>
              ) : (
                <ul className="list-group list-group-flush">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <span className="text-muted ms-2">(x{item.quantity})</span>
                      </div>
                      <span>{(item.price * item.quantity).toLocaleString()}đ</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                    <span>Tổng cộng:</span>
                    <span>{totalAmount.toLocaleString()}đ</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Thông tin khách hàng */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-light">
              <h4 className="mb-0">Thông tin khách hàng</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Số điện thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Địa chỉ giao hàng</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2"
                  disabled={cartItems.length === 0 || isSubmitting}
                >
                  {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt hàng"}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
   </div>
  </div>
);
}

export default Order;
