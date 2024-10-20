import Sample from "../../../components/Sample";
import Popup from "../../../../components/Popup";
import usePopup from "../../../../components/Popup/hooks/usePopup";
import ImageGallery from "../components/ImageGallery";

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
          header={<strong>Image gallery</strong>}
          body={<ImageGallery />}
          showClose
      />
      </section>
    </div>
  );
}
`

const HtmlContentModalSample = () => {
  const { open, openPopup, closePopup } = usePopup();

  return (
    <Sample
      code={CODE_SAMPLE}
      description="It is also possible to render more complex components like an Image gallery."
    >
      <section>
        <button onClick={openPopup}>Open modal</button>
        <Popup
          open={open}
          onClose={closePopup}
          header={<strong>Image gallery</strong>}
          body={<ImageGallery />}
          showClose
        />
      </section>
    </Sample>
  );
}

export default HtmlContentModalSample;