const modeStyles = {
  'support only': 'bg-sage/70',
  'reality check': 'bg-peach/80',
  'advice wanted': 'bg-clay/80',
  'just venting': 'bg-mist'
};

export default function ModeBadge({ mode }) {
  return (
    <span className={`badge ${modeStyles[mode] || ''}`}>
      {mode}
    </span>
  );
}
