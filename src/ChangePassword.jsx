import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

function ChangePassword() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to right, #fceabb, #f8b500)",
      }}
    >
      <div className="p-4 shadow rounded bg-white" style={{ width: "100%", maxWidth: "450px" }}>
        <h4 className="text-center mb-4">Đổi Mật Khẩu</h4>

        <form>
          <div className="mb-3">
            <label className="form-label">Mật khẩu hiện tại</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu hiện tại"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu mới"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Xác nhận mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Xác nhận thay đổi
          </button>

          <p className="text-center mt-3">
            <Link> to=/Quay lại trang chính</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
