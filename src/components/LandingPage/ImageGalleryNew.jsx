import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ImageGallery = () => {
  const speed = 5000;
  const imageSize = 'w-[300px] h-[200px]';

  const images = [
    'https://images.unsplash.com/photo-1606326608606-aa0b629d1932',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
  ].map((img, i) => ({
    id: `img-${i}-${Date.now()}`,
    url: `${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80`
  }));

  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative py-8 h-[200px]">
        <div className="inner">
          <div className="wrapper">
            {[1, 2, 3].map((_, idx) => (
              <section 
                key={`sec-${idx}`}
                style={{ "--speed": `${speed}ms` }}
                className="flex items-center gap-8"
              >
                {images.map(({ id, url }) => (
                  <div key={id} className="image">
                    <LazyLoadImage
                      src={url}
                      effect="opacity"
                      className={`${imageSize} object-cover`}
                    />
                  </div>
                ))}
              </section>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
