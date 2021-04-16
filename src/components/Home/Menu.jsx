import FeedbackButton from './FeedbackButton';
import SourceLink from './SourceLink';
import EmailButton from './EmailButton';

export default function Menu() {
  return (
    <header className="flex items-center justify-between mb-3">
      <FeedbackButton />
      <div className="flex items-center">
        <EmailButton />
        <SourceLink />
      </div>
    </header>
  );
}
