import useLocalStorage from "../../../../components/LocalStorageHandler/useLocalStorage";
import Input from "../components/Input";
import Sample from "../../../components/Sample";

const CODE_SAMPLE = `
const TwoSyncedInputsSample = () => {
  const [value, setValue] = useLocalStorage('two_components_key', '');

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sample_input">
        Please enter a value to see how it is reflected in the screen
      </label>
      <input
        id="sample_input"
        type="text"
        value={value}
        onChange={handleOnChange}
      />
    </div>
    <div>
      <h2>Here you can see the updated value: </h2>
      <span>{value}</span>
    </div>
  );
}
`

const TwoSyncedInputsSample = () => {
  const [value, setValue] = useLocalStorage('two_components_key', '');

  return (
    <Sample code={CODE_SAMPLE}>
      <section>
        <Input
          label="Please enter a value to see how it is reflected in the screen"
          value={value}
          onChange={setValue}
        />
      </section>
      <section>
        <Input
          label="Here you can see the updated value"
          value={value}
          readOnly
        />
      </section>
    </Sample>
  );
}

export default TwoSyncedInputsSample;