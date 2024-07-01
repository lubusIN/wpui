/**
 * External dependencies.
 */
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';

/**
 * internal dependencies.
 */
import gettingStarted from "@wpui/docs/getting-started.md"

function GettingStarted() {
  return (
    <div className="getting-started">
      <Markdown remarkPlugins={[remarkGfm]}>{gettingStarted}</Markdown>
    </div>
  );
};
export default GettingStarted;