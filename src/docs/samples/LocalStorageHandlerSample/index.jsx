import ComponentSamples from "../../components/ComponentSamples";
import EffectSample from "./samples/EffectSample";
import ReloadSample from "./samples/ReloadSample";
import ResetSample from "./samples/ResetSample";
import TwoSyncedInputsSample from "./samples/TwoSyncedInputsSample";

const LocalStorageHandlerSample = () => {
  return (
    <ComponentSamples
      title={'localStorage handler'}
      description="The useLocalStorage hook provides a convenient way to manage data storage within a React application using the browser's localStorage. 
      It abstracts away the complexities of working with localStorage directly, making it easier to persist data between page reloads or browser sessions."
    >
      <TwoSyncedInputsSample />
      <ReloadSample />
      <EffectSample />
      <ResetSample />
    </ComponentSamples>
  );
}

export default LocalStorageHandlerSample;