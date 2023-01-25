import Input from "./Input";
import PastInput from "./PastInput";
import "../styles/Screen.scss";
import { atom, useAtom } from "jotai";

interface Focus {
  hasFocus: boolean;
}

interface pastValues {
  values: string;
  result: string;
}

export const pastValuesAtom = atom<pastValues[]>([]);

function Screen({ hasFocus }: Focus) {
  const [pastInputs] = useAtom(pastValuesAtom);
  const getPastInputs = pastInputs.map((item) => (
    <PastInput values={item.values} result={item.result} />
  ));
  return (
    <div id="screen">
      {getPastInputs}
      <Input hasFocus={hasFocus} />
    </div>
  );
}

export default Screen;
