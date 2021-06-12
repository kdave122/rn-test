/** @format */

import styles from "./App.module.scss";
import NavMenu from "./Components/NavMenu/NavMenu";
import Carousel from "./Components/Carousel/Carousel";
import background from "./assets/images/Background.png";
import Avatar from "./Components/Avatar/Avatar";

function App() {
  return (
    <div className={styles.app}>
      <img src={background} alt="mainbg" />
      <Avatar />
      <Carousel />
      <NavMenu />
    </div>
  );
}

export default App;
