'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

let isFirstLoad = true;

export function useAnimation() {
  const pathname = usePathname();
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
      return;
    }
    
    // 防止重复执行
    if (isRunningRef.current) {
      return;
    }
    
    isRunningRef.current = true;
    
    if (typeof window === 'undefined') {
      isRunningRef.current = false;
      return;
    }
    
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) {
      isRunningRef.current = false;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // 清理旧的 ScrollTrigger
    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());

    // 清理旧的 SplitText 和动画
    document.querySelectorAll('.split_chars').forEach((element: any) => {
      if (element.split) {
        element.split.revert();
        element.split = null;
      }
      if (element.animation) {
        element.animation.kill();
        element.animation = null;
      }
    });

    document.querySelectorAll('.title-anim').forEach((element: any) => {
      if (element.split) {
        element.split.revert();
        element.split = null;
      }
      if (element.animation) {
        element.animation.progress(1).kill();
        element.animation = null;
      }
    });

    // 使用 requestAnimationFrame 确保 DOM 更新完成
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      // 图片 reveal 动画 - 按照原始 main.js 逻辑
      document.querySelectorAll('.reveal').forEach((container: any) => {
        const image = container.querySelector('img');
        if (!image) return;

        const rect = container.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          // 在视口内，立即播放动画
          const tl = gsap.timeline();
          tl.set(container, { autoAlpha: 1 });
          tl.from(container, {
            xPercent: -100,
            duration: 1,
            ease: 'power2.out',
          });
          tl.from(image, {
            xPercent: 100,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          }, '<');
        } else {
          // 不在视口内，使用 ScrollTrigger
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
          tl.set(container, { autoAlpha: 1 });
          tl.from(container, {
            xPercent: -100,
            duration: 1,
            ease: 'power2.out',
          });
          tl.from(image, {
            xPercent: 100,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          }, '<');
        }
      });

      // 文字 split_chars 动画
      document.querySelectorAll('.split_chars').forEach((element: any) => {
        const text = element.textContent;
        if (!text) return;

        const SplitText = (window as any).SplitText;
        if (!SplitText) {
          element.innerHTML = '';
          text.split('').forEach((char: string) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            element.appendChild(span);
          });

          gsap.to(element.querySelectorAll('span'), {
            opacity: 1,
            duration: 0.3,
            delay: 0.3,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        } else {
          const splittedText = new SplitText(element, {
            type: 'chars, words',
          });
          
          gsap.from(splittedText.chars, {
            duration: 0.3,
            delay: 0.3,
            autoAlpha: 0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // split-text 动画
      document.querySelectorAll('.split-text').forEach((element: any) => {
        const text = element.textContent;
        if (!text) return;

        element.innerHTML = '';
        text.split('').forEach((char: string) => {
          const span = document.createElement('span');
          span.classList.add('char');
          span.textContent = char === ' ' ? '\u00A0' : char;
          element.appendChild(span);
        });

        gsap.to(element.querySelectorAll('.char'), {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // title-anim 动画
      document.querySelectorAll('.title-anim').forEach((element: any) => {
        const SplitText = (window as any).SplitText;
        if (SplitText) {
          const itemSplitted = new SplitText(element, { type: 'words, lines' });
          element.split = itemSplitted;
          gsap.set(element, { perspective: 400 });
          
          element.animation = gsap.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: 'top center -50',
            stagger: 0.1,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
      
      isRunningRef.current = false;
    });
  }, [pathname]);
}
