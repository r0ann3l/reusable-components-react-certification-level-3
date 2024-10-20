import useLocalStorage from "../../../../components/LocalStorageHandler/useLocalStorage";
import Input from "../components/Input";
import Sample from "../../../components/Sample";

const CODE_SAMPLE = `
const ReloadSample = () => {
  const { value, changeValue } = useLocalStorage('reload_key', '');

  const handleOnChange = (event) => {
    changeValue(event.target.value);
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

const ReloadSample = () => {
  const { value, changeValue } = useLocalStorage('reload_key', '');

  const handleOnClickRefreshPage = () => {
    window.location.reload();
  }

  return (
    <Sample code={CODE_SAMPLE} description={'Even if you refresh the page the value will be there.'}>
      <section>
        <Input
          label="Please enter a value"
          value={value}
          onChange={changeValue}
        />
      </section>
      <section>
        <button onClick={handleOnClickRefreshPage}>Refresh the page</button>
      </section>
    </Sample>
  );
}

export default ReloadSample;