/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
    },

    webpack: (config, { isServer }) => {
        if (isServer) {
            // Externalize native module
            config.externals.push('@node-rs/argon2');

            // Handle .node binaries with node-loader
            config.module.rules.push({
                test: /\.node$/,
                use: 'node-loader',
            });
        }
        return config;
    },
}

module.exports = nextConfig