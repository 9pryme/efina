'use client';

import { CloudinaryImage } from '@/src/components/ui/CloudinaryImage';

<div className="absolute inset-0">
  <CloudinaryImage
    src="hero/background"  // Instead of /images/hero/background.jpg
    alt="Hero background"
    fill
    className="object-cover"
    priority
  />
</div> 