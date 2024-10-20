import { useState } from "react";
import Sample from "../../components/Sample";
import Popup from "../../../components/Popup";
import usePopup from "../../../components/Popup/hooks/usePopup";

const CODE_SAMPLE = `
const ConfirmationDialogSample = () => {
  const { open, openPopup, closePopup } = usePopup();

  const [answer, setAnswer] = useState();

  const handleOnClick = (answer) => {
    setAnswer(answer);
  }

  return (
    <div>
      <section>
        <button onClick={openPopup}>Open dialog</button>
        <Popup
          open={open}
          onClose={closePopup}
          mode="dialog"
          showClose
          header="Confirmation!"
          body={'Are you sure you want to remove this item?'}
          footer={
            <>
              <button onClick={() => handleOnClick('Yes')}>Yes</button>
              <button onClick={() => handleOnClick('No')}>No</button>
            </>
          }
        />
      </section>
      <section>
        The selected answer is: <strong>{answer}</strong>
      </section>
    </div>
  );
}
`

const ConfirmationDialogSample = () => {
  const { open, openPopup, closePopup } = usePopup();

  const [answer, setAnswer] = useState();

  const handleOnClick = (answer) => {
    setAnswer(answer);
  }

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <>
          <p>By using the prop <code>mode="dialog"</code> it is possible to show the popup as a Dialog. </p>
          <p>Combined with the option <code>showClose</code> set to <code>true</code>, we'll have an option to close the Dialog</p>
        </>
      }
    >
      <section>
        <button onClick={openPopup}>Open dialog</button>
        <Popup
          open={open}
          onClose={closePopup}
          mode="dialog"
          showClose
          header="Confirmation!"
          body={'Are you sure you want to remove this item?'}
          footer={
            <>
              <button onClick={() => handleOnClick('Yes')}>Yes</button>
              <button onClick={() => handleOnClick('No')}>No</button>
            </>
          }
        />
      </section>
      <section>
        The selected answer is: <strong>{answer || 'No answer yet'}</strong>
      </section>
    </Sample>
  );
}

export default ConfirmationDialogSample;