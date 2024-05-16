import React from 'react';

const Career = () => {
  return (
    <div>
      
      <img src="/Assets/career1.jpg" alt="Career Image" style={{ width: '100%', height: '400px' }} />
      <div>
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '70%', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ color: '#888', marginBottom: '20px' }}>FLAWLESS TEAMWORK.</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '50%', position: 'relative' }}>
                <p style={{ marginBottom: '20px' }}>At Musale Construction, we pride ourselves on perfect execution of all our projects. The level of excellence has been achieved by our flawless teamwork, an eye for detail, a non-compromising attitude, a passion for putting our best into every task as well as our ability and desire to embrace challenges.</p>
                <p style={{ marginBottom: '20px' }}>Musale Construction continuously seeks to strengthen its capabilities in the areas of infrastructure, project design, and finance. We have a very healthy, vibrant, and lively work culture.</p>
              </div>
              <div style={{ width: '50%', marginLeft: '20px' }}>
                <p style={{ marginBottom: '20px' }}>The experience gathered over the years by our management team enables quick decision-making, which ensures that the projects are executed within the construction contract timelines, without compromising on quality and efficiency.</p>
                <p style={{ marginBottom: '20px' }}>At every step and in every way, we at Musale Construction, ensure excellence and perfection. Hence, the final outcome is a perfect rendering of the client's brief.</p>
              </div>
            </div>
            <div style={{ width: '100%', marginTop: '50px', marginBottom: '50px' }}>
              <h2 style={{ color: '#888', marginBottom: '20px' }}>COME JOIN US.</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                  <p>We create and continuously strive to maintain a healthy workplace environment. We seek talented professionals who want to bring their talent and expertise to our team.</p>
                </div>
                <div style={{ width: '48%' }}>
                  <p>If you are interested in working with us, you may apply for the relevant positions available with us or you may also mail your updated resume at <strong>musale.construction@rediffmail.com</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', fontSize: '14px', color: 'white' }}>
          © Copyright 2024 | Musale Construction
        </div>
      </div>
    </div>
  );
}

export default Career;
