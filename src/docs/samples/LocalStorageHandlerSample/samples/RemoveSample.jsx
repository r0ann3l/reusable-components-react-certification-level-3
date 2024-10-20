import useLocalStorage from "../../../../components/LocalStorageHandler/useLocalStorage";
import Input from "../components/Input";
import Sample from "../../../components/Sample";

const CODE_SAMPLE = `
const ResetSample = () => {
  const { value, changeValue, removeValue } = useLocalStorage('remove_key', 'initial value');

  return (
    <div>
      <section>
        <Input
          label="Please enter a value"
          value={value || ''}
          onChange={changeValue}
        />
      </section>
      <section>
        <button onClick={removeValue}>Remove value</button>
      </section>
    </div>
  );
}
`

const RemoveSample = () => {
  const { value, changeValue, removeValue } = useLocalStorage('remove_key', 'initial value');

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <p><code>removeValue</code> of the object returned by <code>useLocalStorage</code> can be used to remove the value.</p>
      }
    >
      <section>
        <Input
          label="Please enter a value"
          value={value || ''}
          onChange={changeValue}
        />
      </section>
      <section>
        <button onClick={removeValue}>Remove value</button>
      </section>
    </Sample>
  );
}

export default RemoveSample;