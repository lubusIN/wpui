/**
 * External dependencies.
 */
import ReactMarkdown from "react-markdown";
import Markdown  from "react-markdown";
import remarkGfm from 'remark-gfm';

/**
 * internal dependencies.
 */
import Gs from "../doc/getting-started.md"
import "../styles/doc.css" 

const Gettingstarted = () => {
  return (
    <div className="main">
       <Markdown remarkPlugins={[remarkGfm]}>{Gs}</Markdown>
    </div>
  );
};
export default Gettingstarted;