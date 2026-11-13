import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000033',
          color: '#00a3e0',
          fontWeight: 800,
          fontSize: 20,
          borderRadius: 6,
        }}
      >
        I
      </div>
    ),
    { ...size }
  );
}
