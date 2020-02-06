module.exports = {
    'src/**/*.{js,jsx,ts,tsx}': files => {
        return files
            .filter(f => f.indexOf('codegen') === -1)
            .map(f => `npm run lint ${f}`);
    }
}
