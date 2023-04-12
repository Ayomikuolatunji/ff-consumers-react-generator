import "./styles.css";
import React from "react";
export default function App() {
  const [embedCode, setEmbedCode] = React.useState("");

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmbedCode(event.target.value);
  };
  return (
    <div className="App">
      <main style={{ overflow: "hidden" }}>
        <div style={{ maxWidth: "100%" }}>
          <textarea
            placeholder="Paste your embed code here"
            value={embedCode}
            onChange={handleCodeChange}
            style={{
              width: "100%",
              height: "200px",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              resize: "vertical"
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px"
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
      </main>
    </div>
  );
}
