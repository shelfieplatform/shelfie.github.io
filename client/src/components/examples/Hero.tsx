import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onJoinWaitlist={() => console.log('Join waitlist clicked from Hero')} />;
}
