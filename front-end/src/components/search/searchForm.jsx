import { useState } from "react";
export const SearchForm = (props) => {
  const { handleSubmit, placeholder } = props;
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(text);
  };

  return (
    <form
      style={{
        padding: "20px",
        margin: "0 auto",
      }}
      onSubmit={(e) => submitHandler(e)}
    >
      <div>
        <input
          name="search"
          type="search"
          onChange={(e) => handleChange(e)}
          value={text}
          placeholder={placeholder}
          style={{
            width: "250px",
            padding: "20px",
            marginLeft: "10px",
            border: "1px #4ccb29 solid",
          }}
        />
      </div>
      <button
        type="submit"
        disabled={text === ""}
        className="find-btn"
        style={{
          padding: "20px",
          marginTop: "40px",
          background: "#DFFFD6",
          color: "darkslategrey",
          border: "1px #4CCB29 solid",
          borderRadius: "2px",
          cursor: "pointer",
          width: "200px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Find</span>
      </button>
    </form>
  );
};
