
const Modal = ({modal, setModal, className, children}: any) => {

  // Modal States
  const activeState = "fixed rounded-md w-[40%] h-[65vh] bg-[white] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-modalFadeIn";
  const hiddenState = "hidden";

  // Modal Background States
  const modalBgActive = "fixed z-40 top-0 left-0 w-screen h-screen bg-[black] animate-modalBgFadeIn opacity-40";
  const modalBgHidden = "hidden";

  const toggleModal = () => {
    if (modal === activeState) setModal(hiddenState);
    else setModal(activeState);
  }

  return (
    <>
    <div className={ (modal === activeState) ? modalBgActive : modalBgHidden }></div>
    <div className={`${modal} ${className}`}>
      <header className="flex justify-end items-center">
        <button className="text-[black] px-5 py-3 text-[25px]" onClick={toggleModal}><i className="fa-solid fa-xmark"></i></button>
      </header>
      {children} 
    </div>
    </>
  )
}

export default Modal
