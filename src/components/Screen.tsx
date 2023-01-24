import Input from "./Input";
import "../styles/Screen.scss";

interface Focus {
  hasFocus: boolean;
}

function Screen({ hasFocus }: Focus) {
  return (
    <div id="screen">
      <Input hasFocus={hasFocus} />
    </div>
  );
}

export default Screen;
