'use client';

import { useState } from 'react';
import { DesignLightbox } from './DesignLightbox';
import type { DesignShowcase } from '@/lib/designs';

interface DesignCardProps {
  design: DesignShowcase;
}

export function DesignCard({ design }: DesignCardProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        className="design-card"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        <div className="design-card-image">
          <img src={design.cover} alt={design.title} />
          <div className="design-card-overlay">
            <span>点击查看</span>
          </div>
        </div>
        <div className="design-card-info">
          <h4>{design.title}</h4>
          <p>{design.tags.join(' · ')}</p>
        </div>
      </div>

      <DesignLightbox
        open={open}
        close={() => setOpen(false)}
        images={design.images}
        title={design.title}
        tags={design.tags}
        index={index}
      />
    </>
  );
}
