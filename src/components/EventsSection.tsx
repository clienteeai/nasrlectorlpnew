import { Calendar, Clock, Video, Users, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Weekly Forex Outlook",
    date: "December 10, 2024",
    time: "7:00 PM GST / 8:30 PM IST",
    type: "Webinar",
    icon: Video,
  },
  {
    title: "Live Trading Session: Gold Analysis",
    date: "December 12, 2024",
    time: "3:00 PM GST / 4:30 PM IST",
    type: "Live Trading Session",
    icon: Users,
  },
  {
    title: "Crypto Market Deep Dive",
    date: "December 15, 2024",
    time: "6:00 PM GST / 7:30 PM IST",
    type: "Webinar",
    icon: Video,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trading Events & <span className="text-gradient-gold">Live Sessions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the markets and the Nasr Trade community.
          </p>
        </div>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Join online webinars, live trading rooms, and special events timed for traders 
          across the Middle East and India.
        </p>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <div key={index} className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <event.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-emerald">{event.type}</span>
              </div>

              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              </div>

              <a href="#register" className="btn-ghost w-full text-center text-sm py-2.5">
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* See All CTA */}
        <div className="text-center">
          <a 
            href="https://trade.nasrlector.com/landing?signup=1" 
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #b8960f 100%)',
              color: '#0a0a0d',
              borderRadius: '50px',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.35)',
            }}
          >
            Join Upcoming Events
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
