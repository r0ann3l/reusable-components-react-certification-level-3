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
    closePopup();
  }

  return (
    <div>
      <section>
        <button onClick={openPopup}>Open dialog</button>
        <Popup
          open={open}
          onClose={closePopup}
          header={<strong>Confirmation!</strong>}
          body={
            <span>Are you sure you want to remove this item? <strong>Be very careful</strong></span>
          }
          footer={
            <>
              <button onClick={() => handleOnClick('Yes')}>Yes</button>
              <button onClick={() => handleOnClick('No')}>No</button>
            </>
          }
          autoclose={false}
        />
      </section>
      <section>
        The selected answer is: <strong>{answer}</strong>
      </section>
    </div>
  );
}
`

const ConfirmationModalSample = () => {
  const { open, openPopup, closePopup } = usePopup();

  const [answer, setAnswer] = useState();

  const handleOnClick = (answer) => {
    setAnswer(answer);
    closePopup();
  }

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <>
          <p>The popup's <code>header</code>, <code>body</code>, and <code>footer</code> could be any HTML/component the you want</p>
          <p>
            By default, when the user clicks outside the modal, it will be closed. To avoid this behavior, we can set the prop <code>autoclose</code> to <code>false</code>.
            <strong> Note that this prop doesn't have any effect if <code>mode="dialog"</code></strong>
          </p>
        </>
      }
    >
      <section>
        <button onClick={openPopup}>Open modal</button>
        <Popup
          open={open}
          onClose={closePopup}
          header={<strong>Confirmation!</strong>}
          body={
            <span>Are you sure you want to remove this item? <strong>Be very careful</strong></span>
          }
          footer={
            <>
              <button onClick={() => handleOnClick('Yes')}>Yes</button>
              <button onClick={() => handleOnClick('No')}>No</button>
            </>
          }
          autoclose={false}
        />
      </section>
      <section>
        The selected answer is: <strong>{answer || 'No answer yet'}</strong>
      </section>
    </Sample>
  );
}

export default ConfirmationModalSample;