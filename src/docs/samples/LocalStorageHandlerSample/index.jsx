import useLocalStorage from "../../../components/LocalStorageHandler/useLocalStorage";
import ComponentSamples from "../../components/ComponentSamples";
import Input from "../../components/Input";
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

  const handleOnClickRefreshPage = () => {
    window.location.reload();
  }

  return (
    <ComponentSamples
      title={'localStorage handler'}
      description="The useLocalStorage hook provides a convenient way to manage data storage within a React application using the browser's localStorage. It abstracts away the complexities of working with localStorage directly, making it easier to persist data between page reloads or browser sessions."
    >
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
        <section>
          <span>Even if you refresh the page the value will be there</span>
          <button onClick={handleOnClickRefreshPage}>Refresh the page</button>
        </section>
        <section>
          <span>You can also change the value directly in your browser's localStorage. It will be reflected here too. <strong>Try it out!!!</strong></span>
        </section>
      </Sample>
    </ComponentSamples>
  );
}

export default LocalStorageHandlerSample;