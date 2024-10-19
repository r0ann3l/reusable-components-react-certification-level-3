import { useEffect } from "react";
import useLocalStorage from "../../../../components/LocalStorageHandler/useLocalStorage";
import Input from "../../../components/Input";
import Sample from "../../../components/Sample";

const CODE_SAMPLE = `
const EffectSample = () => {
  const [value, setValue] = useLocalStorage('effect_key', '');

  useEffect(() => {
    console.log({ value })
  }, [value])

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sample_input">Please enter a value</label>
      <input
        id="sample_input"
        type="text"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
`

const EffectSample = () => {
  const [value, setValue] = useLocalStorage('effect_key', '');

  useEffect(() => {
    console.log({ value })
  }, [value])

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <ul>
          <li>You can also change the value directly in your browser's localStorage. It will be reflected here too. Look for 'effect_key' and change it.</li>
          <li>Or you can even observe the value and execute an action when it changes, like printing it in the console</li>
        </ul>
      }>
      <section>
        <Input
          label="Please enter a value"
          value={value}
          onChange={setValue}
        />
      </section>
    </Sample>
  );
}

export default EffectSample;