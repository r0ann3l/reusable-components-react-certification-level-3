import ComponentSamples from "../../components/ComponentSamples";
import ConfirmationDialogSample from "./samples/ConfirmationDialogSample";
import ConfirmationModalSample from "./samples/ConfirmationModalSample";
import HtmlContentModalSample from "./samples/HtmlContentModalSample";

const DialogSample = () => {

  return (
    <ComponentSamples
      title={'Generic dialog'}
      description="Reusable component that allows you to display content in an overlay. It can be used for anything, from confirming user actions to showing additional details."
    >
      <ConfirmationModalSample />
      <ConfirmationDialogSample />
      <HtmlContentModalSample />
    </ComponentSamples>
  );
}

export default DialogSample;