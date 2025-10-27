import Image from 'next/image';

export function Logo({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Company G logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
