export const Footer=()=>
{
    return(
        <>
            <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <h2 className="footer__content">Đăng ký ngay để không bỏ lỡ các chương trình của chúng tôi</h2>
            <form className="footer__form" action="">
              <input placeholder="Nhập email của bạn..." type="text"/>
              <button className="button">Đăng Ký Ngay</button>
            </form>
          </div>
          <div className="footer__mider">
            <nav className="footer__menu">
              <ul>
                <li><a href="#">trang chủ</a></li>
                <li><a href="#">danh mục</a></li>
                <li><a href="#">giới thiệu</a></li>
                <li><a href="#">liên hệ</a></li>
              </ul>
            </nav>
            <nav className="footer__icon">
              <ul>
                <li><a target="_blank" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a target="_blank" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a target="_blank" href="#"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a target="_blank" href="#"><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
            </nav>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">© 2025 Monito. All rights reserved.</div>
            <div className="footer__logo">
              <a href="#">
      
              
              </a>
              </div>
            <div className="footer__link">
              <ul>
                <li><a target="_blank" href="#">Điều khoản dịch vụ</a></li>
                <li><a target="_blank" href="#">Chính sách bảo mật</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}