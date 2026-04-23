'use client';

import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop, DesignsClient } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { getAllDesigns, getAllIndustries, getAllStyles, type ServiceType } from '@/lib/designs-static';
import { DesignCard } from '@/components/DesignCard';
import Link from 'next/link';
import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const serviceTypes: ServiceType[] = ['独立站', '小程序'];

function DesignsFilter({
  currentType,
  currentIndustry,
  currentStyle,
  industries,
  styles,
}: {
  currentType?: string;
  currentIndustry?: string;
  currentStyle?: string;
  industries: string[];
  styles: string[];
}) {
  return (
    <div className="designs-filter">
      <div className="filter-section">
        <div className="filter-label">服务类型</div>
        <div className="filter-tags">
          <Link
            href="/designs"
            className={`filter-tag ${!currentType ? 'active' : ''}`}
          >
            全部
          </Link>
          {serviceTypes.map(type => (
            <Link
              key={type}
              href={`/designs?type=${encodeURIComponent(type)}`}
              className={`filter-tag ${currentType === type ? 'active' : ''}`}
            >
              {type}
            </Link>
          ))}
        </div>
      </div>

      {industries.length > 0 && (
        <div className="filter-section">
          <div className="filter-label">行业</div>
          <div className="filter-tags">
            <Link
              href={`/designs${currentType ? `?type=${encodeURIComponent(currentType)}` : ''}`}
              className={`filter-tag ${!currentIndustry ? 'active' : ''}`}
            >
              全部
            </Link>
            {industries.map(industry => (
              <Link
                key={industry}
                href={`/designs?${new URLSearchParams({
                  ...(currentType && { type: currentType }),
                  industry,
                }).toString()}`}
                className={`filter-tag ${currentIndustry === industry ? 'active' : ''}`}
              >
                {industry}
              </Link>
            ))}
          </div>
        </div>
      )}

      {styles.length > 0 && (
        <div className="filter-section">
          <div className="filter-label">风格</div>
          <div className="filter-tags">
            <Link
              href={`/designs${currentType ? `?type=${encodeURIComponent(currentType)}` : ''}${currentIndustry ? `&industry=${encodeURIComponent(currentIndustry)}` : ''}`}
              className={`filter-tag ${!currentStyle ? 'active' : ''}`}
            >
              全部
            </Link>
            {styles.map(style => (
              <Link
                key={style}
                href={`/designs?${new URLSearchParams({
                  ...(currentType && { type: currentType }),
                  ...(currentIndustry && { industry: currentIndustry }),
                  style,
                }).toString()}`}
                className={`filter-tag ${currentStyle === style ? 'active' : ''}`}
              >
                {style}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DesignsContent() {
  const searchParams = useSearchParams();
  
  const allDesigns = useMemo(() => getAllDesigns(), []);
  const industries = useMemo(() => getAllIndustries(), []);
  const styles = useMemo(() => getAllStyles(), []);

  const type = searchParams.get('type') || undefined;
  const industry = searchParams.get('industry') || undefined;
  const style = searchParams.get('style') || undefined;

  const filteredDesigns = useMemo(() => {
    let result = allDesigns;
    if (type) {
      result = result.filter(d => d.serviceType === type);
    }
    if (industry) {
      result = result.filter(d => d.industry === industry);
    }
    if (style) {
      result = result.filter(d => d.style === style);
    }
    return result;
  }, [allDesigns, type, industry, style]);

  return (
    <section className="blog-section-one">
      <div className="auto-container">
        <Suspense fallback={<div>加载中...</div>}>
          <DesignsFilter
            currentType={type}
            currentIndustry={industry}
            currentStyle={style}
            industries={industries}
            styles={styles}
          />
        </Suspense>

        <div className="designs-grid">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map(design => (
              <DesignCard key={design.id} design={design} />
            ))
          ) : (
            <div className="no-designs">
              <p>暂无符合条件的效果图</p>
            </div>
          )}
        </div>

        <div className="designs-disclaimer">
          <p>* 效果图仅供参考，实际项目以定制为准</p>
        </div>
      </div>
    </section>
  );
}

export default function DesignsPage() {
  return (
    <DesignsClient>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="designs" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="blog-page-title" style={{ backgroundImage: 'url(/images/inner-img/blog-details.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">设计效果图</h5>
                  <h1 className="page-title split-text">Design Showcase</h1>
                  <p className="page-desc title-anim">探索我们的设计能力，为你的项目寻找灵感</p>
                </div>
              </div>
            </div>
          </section>

          <Suspense fallback={<div style={{padding: '50px', textAlign: 'center'}}>加载中...</div>}>
            <DesignsContent />
          </Suspense>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </DesignsClient>
  );
}
