import { ImageResponse } from 'next/og';

export const alt = 'Improx Tech — Enterprise Software & Cloud Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#000033',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 6,
              background: '#0033a0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00a3e0',
              fontWeight: 800,
              fontSize: 28,
            }}
          >
            I
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            Improx Tech
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 960,
              letterSpacing: -1,
            }}
          >
            Engineering Resilient Software &amp; Scalable Cloud Solutions
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#94a3b8',
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Bespoke enterprise applications, modern cloud infrastructure, and data platforms.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 32,
            fontSize: 18,
            color: '#00a3e0',
          }}
        >
          <div>Delaware, USA &bull; Pune, India</div>
          <div>improxtech.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
