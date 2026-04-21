interface MarqueeItem {
  text: string;
  icon?: string;
}

interface MarqueeProps {
  items?: MarqueeItem[];
}

const defaultItems: MarqueeItem[] = [
  { text: 'MULTI-LANGUAGE READY', icon: '/images/inner-img/marquee-icon.png' },
  { text: 'VOICE AND TEXT ENABLED', icon: '/images/inner-img/marquee-icon.png' },
  { text: 'CRM INTEGRATIONS', icon: '/images/inner-img/marquee-icon.png' },
  { text: 'SCALABLE ANY BUSINESS', icon: '/images/inner-img/marquee-icon.png' },
];

export function Marquee({ items = defaultItems }: MarqueeProps) {
  return (
    <section className="marquee-inner-section">
      <div className="inner-container">
        <div className="marquee">
          <div className="marquee-block">
            {items.map((item, index) => (
              <h3 key={index}>
                <img src={item.icon} alt="icon" />
                {item.text}
              </h3>
            ))}
          </div>
          <div className="marquee-block">
            {items.map((item, index) => (
              <h3 key={index}>
                <img src={item.icon} alt="icon" />
                {item.text}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
