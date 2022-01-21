import { useRef, useState } from "react";
import { Controller } from "./components/Controller";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { PhotoContainer } from "./components/photoContainer";
import { TextInput } from "./components/TextInput";
import "./styles.css";
import { FilterDatas } from "./FilterDatas";
import { DropShowdProperty } from "./FilterDatas";
import { Footer } from "./components/Footer";

export default function App() {
  //IMAGE DATA
  const [image, setImage] = useState(
    "https://images.hdqwalls.com/download/crytsal-blue-cube-4k-ku-3840x2160.jpg"
  );
  //Image Filter Data
  const [brightness, setBrightness] = useState(`80%`);
  const [blur, setBlur] = useState("0px");
  const [saturate, setSaturate] = useState("100%");
  const [grayscale, setGrayscale] = useState("0%");
  const [sepia, setSepia] = useState("0%");
  const [hueRotate, setHueRotate] = useState("0deg");
  const [opacity, setOpacity] = useState("100%");
  const [contrast, setContrast] = useState("100%");
  const [invert, setInvert] = useState("0%");
  const [hShadow, setHshadow] = useState("0px");
  const [vShadow, setVshadow] = useState("0px");
  const [dropShadowBlur, setdropShadowBlur] = useState("0px");
  const [dropShadowColor, setDropShadowColor] = useState("Black");
  //Display State
  const [showBrightness, setShowBrightness] = useState(true);
  const [showBlur, setShowBlur] = useState(false);
  const [showSaturate, setShowSaturate] = useState(false);
  const [showGrayscale, setShowGrayscale] = useState(false);
  const [showSepia, setShowSepia] = useState(false);
  const [showHueRotate, setShowHueRotate] = useState(false);
  const [showOpacity, setShowOpacity] = useState(false);
  const [showContrast, setShowContrast] = useState(false);
  const [showInvert, setShowInvert] = useState(false);
  const [showDropShadow, setShowDropShadow] = useState(false);
  //ADVANCE FILTER STATE
  const styledDiv = {
    backgroundImage: ` url(${image})`,
    backgroundColor: "transperent",
    backgroundBlendMode: "unset",
    filter: `brightness(${brightness}) blur(${blur}) saturate(${saturate}) grayscale(${grayscale}) sepia(${sepia}) hue-rotate(${hueRotate}) opacity(${opacity}) contrast(${contrast}) invert(${invert}) drop-shadow(${hShadow} ${vShadow} ${dropShadowBlur} ${dropShadowColor})`
  };
  //GET USER INPUT
  const refInput = useRef();
  const formSubmitEvent = (e) => {
    e.preventDefault();
    setImage(refInput.current.value);
    setShowModal(!showModal);
    FuncRestFilters();
  };
  //FILE UPLOAD FUNCTION
  const uploadEvent = (e) => {
    FuncRestFilters();
    setShowModal(!showModal);
    setImage(window.URL.createObjectURL(e.target.files[0]));
  };
  //FUNCTIONS TO TOGGLE EDITING TOOLS
  const FuncBrightness = () => {
    setShowBrightness(true);
    setShowBlur(false);
    setShowSaturate(false);
    setShowGrayscale(false);
    setShowSepia(false);
    setShowHueRotate(false);
    setShowOpacity(false);
    setShowContrast(false);
    setShowInvert(false);
    setShowDropShadow(false);
  };
  const FuncBlur = () => {
    setShowBrightness(false);

    setShowBlur(true);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncSaturation = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(true);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncGrayscale = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(true);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncSepia = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(true);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncHueRotate = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(true);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncOpacity = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(true);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncContrast = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(true);

    setShowInvert(false);

    setShowDropShadow(false);
  };
  const FuncInvert = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(true);

    setShowDropShadow(false);
  };
  const FuncDropShadow = () => {
    setShowBrightness(false);

    setShowBlur(false);

    setShowSaturate(false);

    setShowGrayscale(false);

    setShowSepia(false);

    setShowHueRotate(false);

    setShowOpacity(false);

    setShowContrast(false);

    setShowInvert(false);

    setShowDropShadow(true);
  };
  const FuncRestFilters = () => {
    setBrightness(`80%`);
    setBlur("0px");
    setSaturate("100%");
    setGrayscale("0%");
    setSepia("0%");
    setHueRotate("0deg");
    setOpacity("100%");
    setContrast("100%");
    setInvert("0%");
    setHshadow("0px");
    setVshadow("0px");
    setdropShadowBlur("0px");
    setDropShadowColor("Black");
  };
  //ARRAY OF FUNCTION TO TOGGLE EDITING  TOOLS
  const arrayOfEditFunctions = [
    FuncBrightness,
    FuncBlur,
    FuncSaturation,
    FuncGrayscale,
    FuncSepia,
    FuncHueRotate,
    FuncOpacity,
    FuncContrast,
    FuncInvert,
    FuncDropShadow,
    FuncRestFilters
  ];
  //MODAL DATA
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Header event={() => setShowModal(!showModal)} />
      <div className="flex-Div">
        <div className="parentdiv">
          <PhotoContainer image={image} styledDiv={styledDiv} />
          <Controller
            filterTools={FilterDatas}
            DropShowdProperty={DropShowdProperty}
            brightness={brightness}
            blur={blur}
            saturate={saturate}
            grayscale={grayscale}
            sepia={sepia}
            hueRotate={hueRotate}
            opacity={opacity}
            contrast={contrast}
            invert={invert}
            setBlur={setBlur}
            setBrightness={setBrightness}
            setSaturate={setSaturate}
            setGrayscale={setGrayscale}
            setSepia={setSepia}
            setHueRotate={setHueRotate}
            setOpacity={setOpacity}
            setContrast={setContrast}
            setInvert={setInvert}
            //Drop Shadow
            hShadow={hShadow}
            vShadow={vShadow}
            dropShadowBlur={dropShadowBlur}
            dropShadowColor={dropShadowColor}
            setHshadow={setHshadow}
            setVshadow={setVshadow}
            setdropShadowBlue={setdropShadowBlur}
            setDropShadowColor={setDropShadowColor}
            //Filters State
            showBrightness={showBrightness}
            showBlur={showBlur}
            showSaturate={showSaturate}
            showGrayscale={showGrayscale}
            showSepia={showSepia}
            showHueRotate={showHueRotate}
            showOpacity={showOpacity}
            showContrast={showContrast}
            showInvert={showInvert}
            //Drop Shadow State
            showDropShadow={showDropShadow}
          />
        </div>
        <Footer toolsEvent={arrayOfEditFunctions} />
      </div>
      {/* Not part of the Dom until  you toggle it  to add new image */}
      {showModal && (
        <Modal closeModalEvent={() => setShowModal(!showModal)}>
          <h1>Add New Image</h1>
          <TextInput
            type="url"
            placeholder="Enter an image URL"
            value={image}
            refInput={refInput}
            event={formSubmitEvent}
            uploadEvent={uploadEvent}
          />
        </Modal>
      )}
    </div>
  );
}
