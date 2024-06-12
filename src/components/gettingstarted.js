import ReactMarkdown from "react-markdown";
import Gs from "./gs.md"
import Markdown  from "react-markdown";
import remarkGfm from 'remark-gfm';
import "./md.css"

const Gettingstarted = () => {
  return (
    <div className="main">
       <Markdown remarkPlugins={[remarkGfm]}>{Gs}</Markdown>
    </div>
  );
};
export default Gettingstarted;