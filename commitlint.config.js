module.exports = {
  rules: {
    "header-min-length": [2, "always", 2]
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)\((\w*)\)-(\w*)\s(.*)$/,
      headerCorrespondence: ["type", "scope", "ticket", "subject"]
    }
  }
};
