import { useReveal } from '../hooks/useReveal';

export default function Video() {
  const ref = useReveal();

  return (
    <div id="video-section" className="sec-wrap reveal" style={{ paddingTop: 0 }} ref={ref}>
      <div className="sec-head">
        <div className="sec-head-left">
          <div className="sys-label">// SYS-02 &nbsp;·&nbsp; EVENT HIGHLIGHTS</div>
          <div className="sys-title">WATCH THE<br />EXPERIENCE</div>
        </div>
      </div>
      <div className="video-outer">
        <div className="video-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="video-dots">
              <div className="video-dot r"></div>
              <div className="video-dot y"></div>
              <div className="video-dot g"></div>
            </div>
            <div className="video-title-bar">HACKVSIT_7.0_HIGHLIGHTS.MP4</div>
          </div>
          <div className="data-row"><div className="dot"></div>PLAYBACK READY</div>
        </div>
        <div className="video-wrap">
          <div className="video-placeholder">
            <div className="play-btn">
              <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p>DROP YOUTUBE EMBED SRC HERE</p>
          </div>
        </div>
        <div className="video-footer">
          <div className="data-row">
            <div className="dot dim"></div>DURATION: 3:22 &nbsp;
            <div className="dot dim"></div>&nbsp;1080P &nbsp;
            <div className="dot dim"></div>&nbsp;HACKVSIT.IN
          </div>
          <div className="data-row" style={{ color: 'var(--yellow)' }}>
            <div className="dot"></div>LIVE REPLAY AVAILABLE
          </div>
        </div>
      </div>
    </div>
  );
}
