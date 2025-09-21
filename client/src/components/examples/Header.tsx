import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="bg-gradient-to-br from-primary via-purple-600 to-blue-900 min-h-screen">
      <Header onJoinWaitlist={() => console.log('Join waitlist clicked')} />
      <div className="pt-20 p-8">
        <p className="text-white">Content below header</p>
      </div>
    </div>
  );
}
