import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ScrollingGallery = () => {
  // Adjust this value to control scrolling speed (higher = slower)
  const scrollSpeed = 15000; // milliseconds
  
  const images1 = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
  ].map((img, i) => ({
    id: `img1-${i}-${Date.now()}`,
    url: `${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80`,
    alt: `Gallery image ${i + 1}`
  }));

  const images2 = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
  ].map((img, i) => ({
    id: `img2-${i}-${Date.now()}`,
    url: `${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80`,
    alt: `Gallery image ${i + 1}`
  }));

  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative py-8 h-[340px] bg-gray-100">
        <div className="inner h-full overflow-hidden">
          <div className="wrapper flex h-full items-center">
            {[1, 2, 3].map((_, idx) => (
              <section
                key={`sec-${idx}`}
                style={{
                  "--speed": `${scrollSpeed}ms`,
                  animation: `scroll ${scrollSpeed}ms linear infinite`,
                  animationDelay: `${-scrollSpeed * idx / 3}ms`,
                  width: `${images1.length * 416}px` /* 400px + 16px padding */
                }}
                className="flex items-center"
              >
                {images1.map(({ id, url, alt }) => (
                  <div key={`first-${id}`} className="px-4 min-w-[400px]">
                    <LazyLoadImage
                      src={url}
                      alt={alt}
                      effect="blur"
                      className="w-[400px] h-[300px] object-cover rounded-lg shadow-md"
                      width={400}
                      height={300}
                      placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    />
                  </div>
                ))}
              </section>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10" />
        </div>
      </div>
      
      <style jsx="true" global="true">{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${images1.length * 416}px / 3)); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(calc(-${images2.length * 416}px / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Second gallery with reverse scrolling */}
      <div className="relative py-8 h-[340px] bg-gray-100">
        <div className="inner h-full overflow-hidden">
          <div className="wrapper flex h-full items-center">
            {[1, 2, 3].map((_, idx) => (
              <section
                key={`sec-reverse-${idx}`}
                style={{
                  "--speed": `${scrollSpeed}ms`,
                  animation: `scrollReverse ${scrollSpeed}ms linear infinite`,
                  animationDelay: `${-scrollSpeed * idx / 3}ms`,
                  width: `${images2.length * 416}px`
                }}
                className="flex items-center"
              >
                {images2.map(({ id, url, alt }) => (
                  <div key={`reverse-${id}`} className="px-4 min-w-[400px]">
                    <LazyLoadImage
                      src={url}
                      alt={alt}
                      effect="blur"
                      className="w-[400px] h-[300px] object-cover rounded-lg shadow-md"
                      width={400}
                      height={300}
                      placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    />
                  </div>
                ))}
              </section>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default ScrollingGallery;
