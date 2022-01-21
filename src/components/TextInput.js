import React, { useState } from "react";
import { FiDownloadCloud } from "react-icons/fi";
export function TextInput({
  uploadEvent,
  refInput,
  type,
  event,
  placeholder,
  value
}) {
  const [defaultValue, setDefaultValue] = useState(value);
  return (
    <form onSubmit={event}>
      <input
        required
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={refInput}
        onInput={() => console.log("Image source changed")}
      />
      <label>
        <p>
          <FiDownloadCloud />
          Upload Image
        </p>
        <input type="file" onChange={uploadEvent} />
      </label>
      <input type="submit" value="Submit" />
      <input
        type="reset"
        value="Clear Input"
        onClick={() => setDefaultValue("")}
      />
    </form>
  );
}
