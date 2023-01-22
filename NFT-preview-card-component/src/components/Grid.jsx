import Footer from "./Footer";
import Image from "./Image";
import Text from "./Text";
import "./Grid.scss"
import Linebreak from "./Linebreak";


function Grid() {
  return (
    <div className="grid">
      <Image/>
      <Text/>
      <Linebreak/>
      <Footer/>
    </div>
  );
}

export default Grid;
