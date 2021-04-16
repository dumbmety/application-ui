import FeedbackButton from './FeedbackButton';
import SourceLink from './SourceLink';
import EmailButton from './EmailButton';

export default function Menu() {
  return (
    <header className="flex items-center justify-between">
      <FeedbackButton />
      <div className="flex items-center">
        <EmailButton />
        <SourceLink />
      </div>
    </header>
  );
}
