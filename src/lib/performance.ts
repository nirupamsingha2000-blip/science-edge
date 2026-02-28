// Performance optimization utilities

export const cacheManager = {
  cache: new Map(),
  
  set(key: string, value: any, minutes: number = 5) {
    this.cache.set(key, {
      value,
      expiry: Date.now() + minutes * 60 * 1000,
    });
  },
  
  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  },
  
  clear() {
    this.cache.clear();
  },
};

// Image optimization
export const imageOptimization = {
  quality: 80,
  formats: ['webp', 'jpeg'],
  sizes: [320, 640, 960, 1280],
};

// Bundle size optimizer config
export const bundleConfig = {
  minify: true,
  sourceMap: process.env.NODE_ENV === 'development',
  compress: true,
};

// Route prefetching for better performance
export const prefetchRoutes = [
  '/courses',
  '/search',
  '/dashboard',
];

// Database query optimization
export const queryOptimization = {
  pageSize: 20,
  cacheSeconds: 300,
  indexes: ['id', 'createdAt', 'email'],
};
