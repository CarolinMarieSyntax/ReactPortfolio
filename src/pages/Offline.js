import React from 'react';
import Plasma from '../components/Plasma';

// Import all 33 images
import img0414 from '../assets/offline/IMG_0414.jpg';
import img0437 from '../assets/offline/IMG_0437.jpg';
import img1250 from '../assets/offline/IMG_1250.jpg';
import img1378 from '../assets/offline/IMG_1378.jpg';
import img2094 from '../assets/offline/IMG_2094.jpg';
import img2406 from '../assets/offline/IMG_2406.jpg';
import img2412 from '../assets/offline/IMG_2412.jpg';
import img3423 from '../assets/offline/IMG_3423.jpg';
import img3471 from '../assets/offline/IMG_3471.jpg';
import img3478 from '../assets/offline/IMG_3478.jpg';
import img3482 from '../assets/offline/IMG_3482.jpg';
import img3487 from '../assets/offline/IMG_3487.jpg';
import img3495 from '../assets/offline/IMG_3495.jpg';
import img3529 from '../assets/offline/IMG_3529.jpg';
import img3545 from '../assets/offline/IMG_3545.jpg';
import img3612 from '../assets/offline/IMG_3612.jpg';
import img3730 from '../assets/offline/IMG_3730.jpg';
import img3734 from '../assets/offline/IMG_3734.jpg';
import img3809 from '../assets/offline/IMG_3809.jpg';
import img3812 from '../assets/offline/IMG_3812.jpg';
import img3817 from '../assets/offline/IMG_3817.jpg';
import img4622 from '../assets/offline/IMG_4622.jpg';
import img4867 from '../assets/offline/IMG_4867.jpg';
import img5082 from '../assets/offline/IMG_5082.jpg';
import img5087 from '../assets/offline/IMG_5087.jpg';
import img5560 from '../assets/offline/IMG_5560.jpg';
import img5648 from '../assets/offline/IMG_5648.jpg';
import img5706 from '../assets/offline/IMG_5706.jpg';
import img5709 from '../assets/offline/IMG_5709.jpg';
import img7054 from '../assets/offline/IMG_7054.jpg';
import img7599 from '../assets/offline/IMG_7599.jpg';
import img7895 from '../assets/offline/IMG_7895.jpg';
import img8148 from '../assets/offline/IMG_8148.jpg';

const offlineImages = [
  img0414, img0437, img1250, img1378, img2094, img2406, img2412, img3423,
  img3471, img3478, img3482, img3487, img3495, img3529, img3545, img3612,
  img3730, img3734, img3809, img3812, img3817, img4622,
  img4867, img5082, img5087, img5560, img5648, img5706, img5709, img7054,
  img7599, img7895, img8148
];

function Offline() {
  return (
    <div className="relative min-h-screen bg-syntax-darker py-16">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-syntax-darker via-syntax-darkBlue/60 to-syntax-darker opacity-90" />
        <Plasma 
          color="#9370DB"
          speed={0.4}
          direction="forward"
          scale={1.4}
          opacity={0.6}
          mouseInteractive={false}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Offline
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Visual Gallery
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {offlineImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-syntax-mediumPurple/30 bg-black/20 aspect-square"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offline;

