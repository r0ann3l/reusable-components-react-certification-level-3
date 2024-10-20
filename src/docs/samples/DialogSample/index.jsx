import ComponentSamples from "../../components/ComponentSamples";
import ConfirmationDialogSample from "./ConfirmationDialogSample";
import ConfirmationModalSample from "./ConfirmationModalSample";
import HtmlContentModalSample from "./HtmlContentModalSample";

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