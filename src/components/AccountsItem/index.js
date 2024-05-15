import classNames from "classnames/bind";
import Styles from "./AccountsItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Styles);

function AccountsItem() {
    return ( 
        <div className={cx("wrapper")}>
            <img className= {cx("avatar")} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/74d110fb8f26d311cbe94c9f8781e8d0~c5_100x100.jpeg?lk3s=a5d48078&nonce=26050&refresh_token=0ffa77d124fe2c074bb599731846423c&x-expires=1715947200&x-signature=Vaq1HKP879HkbpiuGchtAXFR1Yw%3D&shp=a5d48078&shcp=81f88b70" alt="Avatar" />
            <div className="info">
                <p className={cx("useName")}>
                    <span>duchuyx321</span>
                    <FontAwesomeIcon icon = {faCircleCheck} className={cx("useName-Check")}></FontAwesomeIcon>
                </p>
                <span className={cx("name")}>Lê Đức Huy</span>
            </div>
        </div>
     );
}

export default AccountsItem;