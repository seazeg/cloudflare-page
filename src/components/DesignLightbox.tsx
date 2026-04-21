'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';

interface DesignLightboxProps {
  open: boolean;
  close: () => void;
  images: string[];
  title: string;
  tags: string[];
  index: number;
}

export function DesignLightbox({
  open,
  close,
  images,
  title,
  tags,
  index,
}: DesignLightboxProps) {
  const slides = images.map(src => ({ src }));

  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
      plugins={[Zoom, Counter]}
      counter={{
        container: { style: { top: 'unset', bottom: '80px' } }
      }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
      }}
      render={{
        slide: ({ slide }) => (
          <div className="design-lightbox-slide">
            <img src={slide.src} alt={title} className="design-lightbox-image" />
            <div className="design-lightbox-info">
              <h3>{title}</h3>
              <p>{tags.join(' · ')}</p>
            </div>
          </div>
        ),
      }}
    />
  );
}
