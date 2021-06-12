/** @format */

import React from "react";
import styles from "./NavMenu.module.scss";
import wearablesIcon from "../../assets/icons/wearables.svg";
import profileIcon from "../../assets/icons/face.svg";
import helpIcon from "../../assets/icons/help.svg";

export default function NavMenu() {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li>
          <img src={wearablesIcon} alt="wearable" />
          <span>Weareables</span>
        </li>
        <li>
          <img src={profileIcon} alt="profile" />
          <span>Profile</span>
        </li>
        <li>
          <img src={helpIcon} alt="help" />
          <span>Help</span>
        </li>
      </ul>
    </div>
  );
}
