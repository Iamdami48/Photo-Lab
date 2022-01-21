import React from "react";
export function Controller({
  filterTools,
  DropShowdProperty,
  brightness,
  blur,
  saturate,
  grayscale,
  sepia,
  hueRotate,
  opacity,
  contrast,
  invert,
  dropShadow,
  setBrightness,
  setBlur,
  setSaturate,
  setGrayscale,
  setSepia,
  setHueRotate,
  setOpacity,
  setContrast,
  setInvert,
  //Drop Shadow
  hShadow,
  vShadow,
  dropShadowBlur,
  dropShadowColor,
  //Drop shadow Events
  setHshadow,
  setVshadow,
  setdropShadowBlue,
  setDropShadowColor,
  //State
  showBrightness,
  showBlur,
  showSaturate,
  showGrayscale,
  showSepia,
  showHueRotate,
  showOpacity,
  showContrast,
  showInvert,
  showDropShadow
}) {
  const filters = [
    brightness,
    blur,
    saturate,
    grayscale,
    sepia,
    hueRotate,
    opacity,
    contrast,
    invert
  ];
  const DropShowdPropertyFilters = [
    hShadow,
    vShadow,
    dropShadowBlur,
    dropShadowColor
  ];
  const events = [
    setBrightness,
    setBlur,
    setSaturate,
    setGrayscale,
    setSepia,
    setHueRotate,
    setOpacity,
    setContrast,
    setInvert
  ];
  const DropShowdPropertyEvents = [
    setHshadow,
    setVshadow,
    setdropShadowBlue,
    setDropShadowColor
  ];
  const setShowState = [
    showBrightness,
    showBlur,
    showSaturate,
    showGrayscale,
    showSepia,
    showHueRotate,
    showOpacity,
    showContrast,
    showInvert
  ];
  const mw = true;
  return (
    <>
      {filterTools.map((filterTool, index) => (
        <div key={index}>
          {setShowState[index] && (
            <div className="controller">
              <h4>{`${filterTool.name}: ${filters[index]}`}</h4>
              {mw && <br />}
              <p>
                <strong>{filterTool.name}</strong> takes <u>{filterTool.min}</u>{" "}
                as the minimum and <u>{filterTool.max}</u> as the maximum with
                default value of {filterTool.defaultvalue}.
              </p>
              <div className="input-container">
                <span>{filterTool.min}</span>
                <input
                  type={filterTool.controllerType}
                  min={filterTool.min}
                  max={filterTool.max}
                  defaultValue={filterTool.defaultvalue}
                  onInput={(e) =>
                    events[index](`${+e.target.value + filterTool.unit}`)
                  }
                />
                <span>{filterTool.max}</span>
              </div>
            </div>
          )}
        </div>
      ))}
      {showDropShadow && (
        <div className="drop-shadow-controller">
          {DropShowdProperty.map((DSP, index) => (
            <div key={index}>
              <div className="drop-shadow-controller-container">
                <h4>
                  {DSP.name}: {DropShowdPropertyFilters[index]}
                </h4>

                <br />

                <p>
                  <strong>{DSP.name} </strong>

                  {DSP.discription}
                </p>

                <div className="drop-shadow-input-container">
                  <span>{DSP.min}</span>

                  <input
                    type={DSP.controllerType}
                    min={DSP.min}
                    max={DSP.max}
                    defaultValue={DSP.defaultvalue}
                    onInput={(e) =>
                      DropShowdPropertyEvents[index](
                        `${e.target.value + DSP.unit}`
                      )
                    }
                  />

                  <span>{DSP.max}</span>
                </div>
              </div>

              {/*Drop shadow conter contaoner ends below*/}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
