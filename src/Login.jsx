import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
function Login() {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 

    const handleLogin = (event) => {
        event.preventDefault(); 
        setError(''); 
        
        
        if (username === '20227226' && password === '123456') {
            
            console.log("Đăng nhập test thành công!");
            

            
            navigate('/home');
        } else {
            
            console.log("Đăng nhập test thất bại.");
            setError('Thông tin đăng nhập không đúng. (Test: 20227226 / 123456)');
        }
        
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1950&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="row shadow p-4 rounded"
                style={{
                    maxWidth: "800px",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                }}
            >
                
                <div className="col-md-6 d-none d-md-block">
                    <img
                        src="res2.jpg" 
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
                    <h3 className="mb-4 text-center">Đăng Nhập</h3>
                    
                    <form onSubmit={handleLogin}>
                        
                        <div className="mb-3">
                            <label className="form-label">Tên đăng nhập</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên đăng nhập"
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>

                        
                        <div className="mb-1">
                            <label className="form-label">Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        
                        <div className="mb-3 text-end">
                            <Link 
                                to="/quen-mat-khau"
                                className="text-decoration-none small text-primary"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>

                        
                        {error && (
                            <div className="alert alert-danger small p-2 mb-3" role="alert">
                                {error}
                            </div>
                        )}

                        
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>

                        
                        <button type="submit" className="btn btn-primary w-100">
                            Đăng nhập
                        </button>

                        
                        <p className="text-center mt-3">
                            Chưa có tài khoản? <Link to="/dang-ky">Tạo tài khoản</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
