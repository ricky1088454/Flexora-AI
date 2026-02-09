import PageShell from '../../components/PageShell';
import PostCard from '../../components/PostCard';

const samplePosts = [
  {
    id: '1',
    mode: 'support only',
    content: 'I started a new job and feel like I am still catching my breath. Hoping for gentle encouragement.',
    timestamp: 'Today · 9:12am'
  },
  {
    id: '2',
    mode: 'just venting',
    content: 'It has been a week of small setbacks. Writing this down helps me not carry it alone.',
    timestamp: 'Today · 8:03am'
  },
  {
    id: '3',
    mode: 'advice wanted',
    content: 'How do you make space for rest when everything feels urgent?',
    timestamp: 'Yesterday · 5:48pm'
  }
];

export default function FeedPage() {
  return (
    <PageShell
      title="Read quietly"
      description="Chronological, low-pressure posts. No likes, no metrics, no trending feeds."
    >
      <div className="grid gap-6">
        {samplePosts.map((post) => (
          <PostCard key={post.id} post={post} showActions={false} />
        ))}
      </div>
    </PageShell>
  );
}
