module.exports = function override(config, env) {
    config.mode = 'production';
    config.optimization = {minimize: true};
    return config;
}
