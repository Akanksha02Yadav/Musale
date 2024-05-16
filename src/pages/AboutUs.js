import React, { useState } from 'react';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-us" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className="container" style={{ margin: '0 auto', maxWidth: '800px' }}>
        <h2 style={{ color: '#888', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>OUR COMPANY</h2><br></br>
        <div className="paragraph-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="column">
            <p>Musale Construction was incorporated on 5th October 1989. The Company was established with an objective to engage in the business of fabrication, erection, and commissioning related works required for Infrastructure and Irrigation Project. M/s Musale Construction was formed as a partnership concern by Musale Family as partners, which came into existence since 1989. We are an integrated construction and infrastructure development and management company in Vidarbha Region. Since commencing our business in 1989, we have serviced a diverse range of construction and infrastructure projects in sectors as varied as transportation, irrigation, residential, commercial, and retail property. We are headquartered in Nagpur and have five branch offices to manage our business operations throughout Vidarbha.</p>
          </div>
          <div className="column" style={{ marginLeft: '20px' }}>
            <p>We operate principal business segments: a construction business which is operated by our Company. A majority of our development projects are public private partnerships and are operated by separate special-purpose vehicles promoted by our Company and the Government. We own a large fleet of sophisticated construction equipment, including: crushing plants, hot mix plants, wet mix plants, asphalt batching plants, concrete batching plants, excavators, rock breakers, graders, pavers, compactors, tower cranes, dozers, bar bending, and cutting machines. Our workforce, as at September 30, 2009, consisted of 508 full-time employees on a standalone basis. Our workforce, machinery assets, financial net worth, and past execution capabilities enable us to undertake many large-scale projects.</p>
          </div>
        </div><br></br>
        <h2 style={{ color: '#888', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>OUR STRENGTH</h2><br></br>
        <h3 style={{ textAlign: 'center' }}>A TEAM YOU CAN TRUST.</h3><br></br>
        <p>The workforce of Musale Construction is a marvel collection of dreamers, achievers, and believers in their respective domains of expertise. All the departments have the best minds and experience that gets together to plan, execute, and maintain any project. From a worker on-site to someone who holds the highest designation in Administration, our company strives together as a growing and flourishing corporate family.</p><br></br>
        <h3 style={{ textAlign: 'center' }}>MACHINERY STRENGTH.</h3><br></br>
        <p>PLANT & EQUIPMENT</p>
        <ul>
          <li>Excavators of capacity 0.3 cum to 1.9 cum</li>
          <li>Batching Plant of capacity 30 cum / hr to 60 cum / hr</li>
          <li>Concrete Pumps of capacity 13 cum / hr to 60 cum / hr</li>
          <li>Transit Mixers of capacity 6 cum / mix</li>
          <li>Crushers of capacity up to 200 tons / hr</li>
          <li>Rock Bolting Machine</li>
          <li>Static Roller of capacity 8 tons and 10 tons</li>
          <li>Vibratory Roller of capacity 9 tons and 10 tons</li>
          <li>Wagon drills and Drill Jumbos of capacity 48 mm - 115 mm (Ax to Hx)</li>
          <li>Asphalt Paver of capacity 5.5 m and 10 m</li>
          <li>Hot Mix Plant of 60 – 80 tons / hr</li>
          <li>Wet Mix Plant of capacity 100 tons / hr</li>
          <li>Miscellaneous equipment required for construction activities</li>
        </ul>
        <br></br>
        
      </div>


    </div>
  );
};

export default AboutUs;
