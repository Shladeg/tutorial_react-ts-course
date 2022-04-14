import React, { FC, useRef, useState } from "react";

const Events: FC = () => {
  const [value, setValue] = useState<string>("");

  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) =>
    console.log(inputRef.current?.value);

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(isDrag);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDrag(false);
    console.log(event.dataTransfer);
  };

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDrag(false);
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDrag(true);
  };

  return (
    <div>
      <input type="text" placeholder="Неуправляемый" ref={inputRef} />

      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Управляемый"
      />

      <button onClick={clickHandler}>Click</button>

      <div
        draggable
        style={{ width: 200, height: 200, background: "black" }}
        onDrag={dragHandler}
      ></div>

      <div
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "black",
          marginTop: 15,
        }}
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
      ></div>
    </div>
  );
};

export default Events;
