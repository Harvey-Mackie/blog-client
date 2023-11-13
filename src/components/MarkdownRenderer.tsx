import { Remarkable } from 'remarkable';
var md = new Remarkable();
//https://stackoverflow.com/questions/39197731/react-is-rendering-md-remarkable-as-a-string


interface MarkdownRendererProps {
    markdown?: String,
    className?: string
}

const MarkdownRenderer = ({markdown, className} : MarkdownRendererProps) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: md.render('' + markdown) }} />;
};

export default MarkdownRenderer;