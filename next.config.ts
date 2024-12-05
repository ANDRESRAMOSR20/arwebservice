import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,  // Desactivar la optimización de imágenes
    },
};

export default nextConfig;
