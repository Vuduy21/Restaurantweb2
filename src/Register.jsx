import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ), url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1950&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="row shadow p-4 rounded"
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="col-md-6 d-none d-md-block">
          <img
            src="res3.jpg"
            alt="Restaurant"
            className="img-fluid"
            style={{
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-4 text-center">Đăng ký tài khoản</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Họ và tên</label>
              <input type="text" className="form-control" placeholder="Nhập họ tên" />
            </div>
            <div className="mb-3">
              <label className="form-label">Tên đăng nhập</label>
              <input type="text" className="form-control" placeholder="Tên đăng nhập" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
            </div>
            <div className="mb-3">
              <label className="form-label">Xác nhận mật khẩu</label>
              <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
            </div>
            <button type="submit" className="btn btn-success w-100">Đăng ký</button>
            <p className="text-center mt-3">
              Đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
