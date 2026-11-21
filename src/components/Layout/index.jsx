import { Outlet, Link } from "react-router";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.container}>
            <Link to="/" >
                <h1>멋사몰 (9주차 배포 과제 수행!!)</h1>
            </Link>
            {/* <ul>
                <li><Link to="/">홈페이지</Link></li>
                <li><Link to="/about">어바웃</Link></li>
                <li><Link to="/products/123">프로덕트 동작 테스트</Link></li>
            </ul> */}
            <Outlet />
        </div>
    );
};

export default Layout;