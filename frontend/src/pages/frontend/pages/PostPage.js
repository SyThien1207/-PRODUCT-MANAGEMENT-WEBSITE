import React from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
const PostPage = () => {
  return (
    <>
      <Headers />
      <Menu />
      <section className="bg-light">
        <div className="container">
          <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Trang đơn
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-page">
                <li className="list-group-item bg-main py-3">Các trang khác</li>
                <li className="list-group-item">
                  <a href="post_page.html">Chính sách mua hàng</a>
                </li>
                <li className="list-group-item">
                  <a href="post_page.html">Chính sách vận chuyển</a>
                </li>
                <li className="list-group-item">
                  <a href="post_page.html">Chính sách đổi trả</a>
                </li>
                <li className="list-group-item">
                  <a href="post_page.html">Chính sách bảo hành</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <h1 className="fs-2 text-main">Giới thiệu</h1>
              <p>
                Video provides a powerful way to help you prove your point. When
                you click Online Video, you can paste in the embed code for the
                video you want to add. You can also type a keyword to search
                online for the video that best fits your document. To make your
                document look professionally produced, Word provides header,
                footer, cover page, and text box designs that complement each
                other. For example, you can add a matching cover page, header,
                and sidebar. Click Insert and then choose the elements you want
                from the different galleries. Themes and styles also help keep
                your document coordinated. When you click Design and choose a
                new Theme, the pictures, charts, and SmartArt graphics change to
                match your new theme. When you apply styles, your headings
                change to match the new theme. Save time in Word with new
                buttons that show up where you need them. To change the way a
                picture fits in your document, click it and a button for layout
                options appears next to it. When you work on a table, click
                where you want to add a row or a column, and then click the plus
                sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default PostPage;
