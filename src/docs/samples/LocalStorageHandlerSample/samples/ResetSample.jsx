import useLocalStorage from "../../../../components/LocalStorageHandler/useLocalStorage";
import Input from "../components/Input";
import Sample from "../../../components/Sample";

const CODE_SAMPLE = `
const ResetSample = () => {
  const { value, changeValue, resetValue} = useLocalStorage('reset_key', 'initial value');

  return (
    <div>
      <section>
        <Input
          label="Please enter a value"
          value={value}
          onChange={changeValue}
        />
      </section>
      <section>
        <button onClick={resetValue}>Reset value</button>
      </section>
    </div>
  );
}
`

const ResetSample = () => {
  const { value, changeValue, resetValue} = useLocalStorage('reset_key', 'initial value');

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <p><code>resetValue</code> of the object returned by <code>useLocalStorage</code> can be used to reset the value.</p>
      }
    >
      <section>
        <Input
          label="Please enter a value"
          value={value}
          onChange={changeValue}
        />
      </section>
      <section>
        <button onClick={resetValue}>Reset value</button>
      </section>
    </Sample>
  );
}

export default ResetSample;