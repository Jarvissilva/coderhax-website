import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Editor({ onChange, value }) {
  return (
    <QuillEditor
      theme="snow"
      value={value}
      placeholder="Enter snippet description"
      onChange={onChange}
      className="toolbar"
    />
  );
}
