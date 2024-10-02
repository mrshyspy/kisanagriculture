import React from 'react';

const LatestFromSocialMedia = () => {
  return (
    <div className="container mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest from Social Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* YouTube Embed */}
        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              width="656"
              height="369"
              src="https://www.youtube.com/embed/3otMjCHWGwo"
              title="राजस्थानी डबल फैन थ्रेसर मशीन| double fan thresher machine#9828719163 | Kisan agriculture workshop"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Facebook Embed */}
        <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="relative w-full" style={{ paddingTop: '80%' }}>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02k9sjUk9NCaYD8C6jY3vwttR6Tiyr4ttNFCeikhAL4jZ2rFTKzogQCfSsSkf9HELKl%26id%3D100094649059141&show_text=true&width=500"
              width="500"
              height="436"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestFromSocialMedia;
