import ComponentSamples from "../../components/ComponentSamples";
import SampleDescription from "./SampleDescription";
import EffectSample from "./samples/EffectSample";
import ReloadSample from "./samples/ReloadSample";
import TwoSyncedInputsSample from "./samples/TwoSyncedInputsSample";

const LocalStorageHandlerSample = () => {
  return (
    <ComponentSamples
      title={'localStorage handler'}
      description={<SampleDescription />}
    >
      <TwoSyncedInputsSample />
      <ReloadSample />
      <EffectSample />
    </ComponentSamples>
  );
}

export default LocalStorageHandlerSample;