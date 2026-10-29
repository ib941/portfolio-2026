import { ImageResponse } from 'next/og';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#f7edd7', color: '#202020', padding: '72px', border: '16px solid #2a2a2a' }}>
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 4 }}>IA / CREATIVE ENGINEERING</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 82, fontWeight: 700 }}>Ibrahim Alkabsi</div>
        <div style={{ fontSize: 32 }}>Creative Web Developer & Systems Architect</div>
      </div>
      <div style={{ display: 'flex', fontSize: 24, color: '#475569' }}>Web platforms · E-commerce · Visual direction</div>
    </div>, size,
  );
}
