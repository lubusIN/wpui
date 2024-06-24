/**
 * External dependencies.
 */
import Markdown  from "react-markdown";
import remarkGfm from 'remark-gfm';

/**
 * internal dependencies.
 */
import gettingStarted from "../docs/getting-started.md"

const GettingStarted = () => {
  return (
    <div className="main">
       <Markdown remarkPlugins={[remarkGfm]}>{gettingStarted}</Markdown>
    </div>
  );
};
export default GettingStarted;