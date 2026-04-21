interface SectionTitleProps {
  subTitle?: string;
  title: string | string[];
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ subTitle, title, description, className = '', align = 'left' }: SectionTitleProps) {
  const titleLines = Array.isArray(title) ? title : [title];
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : '';

  return (
    <div className={`sec-title ${alignClass} ${className}`}>
      {subTitle && (
        <div className="section-sub-title">
          <h5 className="sub-title split_chars">{subTitle}</h5>
        </div>
      )}
      <div className="section-title">
        {titleLines.map((line, index) => (
          <h1 key={index} className="title split-text">
            {line}
          </h1>
        ))}
      </div>
      {description && <p className="text-anime-3">{description}</p>}
    </div>
  );
}
