import { useState } from "react";

const usePopup = () => {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true)
  }

  const closePopup = () => {
    setOpen(false)
  }

  return {
    open, openPopup, closePopup
  };
}

export default usePopup; 