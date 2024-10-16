import useLocalStorage from "../../../components/LocalStorageHandler/useLocalStorage";
import ComponentSamples from "../../components/ComponentSamples";
import Sample from "../../components/Sample";

const CODE_SAMPLE = `
const LocalStorageHandlerSample = () => {
  const [value, setValue] = useLocalStorage('sample_key', '');

  useEffect(() => {
    console.log('You can even observe the value and execute an action when it changes, like printing it in the console -> ', value)
  }, [value])

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sample_input_localstorage_handler">
        Please enter a value to see how it is reflected in the screen
      </label>
      <input
        id="sample_input_localstorage_handler"
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

const LocalStorageHandlerSample = () => {
  const [value, setValue] = useLocalStorage('sample_key', '');

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ComponentSamples title={'localStorage handler'}>
      <Sample code={CODE_SAMPLE}>
        <div>
          <label htmlFor="sample_input_localstorage_handler">
            Please enter a value to see how it is reflected in the screen
          </label>
          <input
            id="sample_input_localstorage_handler"
            type="text"
            value={value}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <h2>Here you can see the updated value: </h2>
          <span>{value}</span>
        </div>
      </Sample>
    </ComponentSamples>
  );
}

export default LocalStorageHandlerSample;