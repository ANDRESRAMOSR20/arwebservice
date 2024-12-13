import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV !== "production";
const nextConfig: NextConfig = {
    basePath: isProduction ? "arwebservice.com" : "",
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,  // Desactivar la optimización de imágenes
    },
};

export default nextConfig;