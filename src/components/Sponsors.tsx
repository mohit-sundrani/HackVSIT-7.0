import { useReveal } from '../hooks/useReveal';

export default function Sponsors() {
  const ref = useReveal();

  return (
    <section id="sponsors-section" className="sec-wrap reveal" ref={ref}>
      <div className="sec-head">
        <div className="sec-head-left">
          <div className="sys-label">// SYS-04 &nbsp;·&nbsp; POWERED BY</div>
          <div className="sys-title">OUR<br />SPONSORS</div>
        </div>
        <div className="sec-head-right">5 TIERS · OPEN FOR COLLAB</div>
      </div>

      <div className="tier-block">
        <div className="tier-header">TITLE SPONSOR<div className="tier-line"></div>UA-TIER-01</div>
        <div className="tier-row">
          <div className="sponsor-cell" style={{ height: '110px', flex: '0 0 360px' }}><div className="sp-inner" style={{ fontSize: '20px' }}>YOUR BRAND HERE</div></div>
        </div>
      </div>

      <div className="tier-block">
        <div className="tier-header">PLATINUM SPONSORS<div className="tier-line"></div>UA-TIER-02</div>
        <div className="tier-row">
          {[1,2,3].map(i => <div key={i} className="sponsor-cell" style={{ height: '90px', flex: 1, minWidth: '200px' }}><div className="sp-inner" style={{ fontSize: '16px' }}>SPONSOR</div></div>)}
        </div>
      </div>

      <div className="tier-block">
        <div className="tier-header">GOLD SPONSORS<div className="tier-line"></div>UA-TIER-03</div>
        <div className="tier-row">
          {[1,2,3,4].map(i => <div key={i} className="sponsor-cell" style={{ height: '78px', flex: 1, minWidth: '150px' }}><div className="sp-inner">SPONSOR</div></div>)}
        </div>
      </div>

      <div className="tier-block">
        <div className="tier-header">SILVER SPONSORS<div className="tier-line"></div>UA-TIER-04</div>
        <div className="tier-row">
          {[1,2,3,4,5].map(i => <div key={i} className="sponsor-cell" style={{ height: '66px', flex: 1, minWidth: '120px' }}><div className="sp-inner">PARTNER</div></div>)}
        </div>
      </div>

      <div className="tier-block">
        <div className="tier-header">COMMUNITY PARTNERS<div className="tier-line"></div>UA-TIER-05</div>
        <div className="tier-row">
          {[1,2,3,4,5,6].map(i => <div key={i} className="sponsor-cell" style={{ height: '56px', flex: 1, minWidth: '100px' }}><div className="sp-inner" style={{ fontSize: '10px' }}>COMMUNITY</div></div>)}
        </div>
      </div>
    </section>
  );
}
