const { useBabelRc, override } = require("customize-cra");
const rewireStyledComponents = require("react-app-rewire-styled-components");

const styledComponents = obj => config => {
    config = rewireStyledComponents(config, process.env.NODE_ENV, obj);
    return config;
};

module.exports = override(
    useBabelRc(),
    styledComponents({
        displayName: (process.env.NODE_ENV !== "production")
    })
);