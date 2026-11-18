import {useState} from 'react';
import {ImageOff} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({src, alt, className = '', fallbackTitle}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFEAE1] via-[#E9F1EE] to-[#E4DDD0] p-6 text-center text-[#1B2A2F] ${className}`}
      >
        <ImageOff className="mb-3 h-7 w-7 text-[#0F4C5C]" aria-hidden="true" />
        <p className="text-sm font-medium text-[#1B2A2F]">
          {fallbackTitle || 'Imagem ilustrativa demonstrativa'}
        </p>
        <p className="mt-1 max-w-xs text-xs text-[#506268]">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
