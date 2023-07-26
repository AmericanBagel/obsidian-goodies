// app.internalPlugins.plugins.graph.instance.options.search
module.exports = {
    entry: async function(QuickAdd, settings) {
        let appJsonPath = this.app.vault.configDir + '/' + "app.json";  // (node.js path module doesn't work on mobile)

		let text = await this.app.vault.adapter.read(appJsonPath);
		let appJson = JSON.parse(text);
        console.log(settings)
        let excludedFiles = settings["Excluded Files"].split(":");

        console.log(excludedFiles);
        console.log(appJson);

		excludedFiles.forEach(
			(ignoreFilter) => {
                appJson.userIgnoreFilters = [...excludedFiles]
			});

		// Stringify with "space" parameter = 2 so it pretty-prints like Obsidian default behavior
		await this.app.vault.adapter.write(appJsonPath, JSON.stringify(appJson, null, 2));
    },
    settings: {
        name: "Change excluded filters",
        author: "AmericanBagel",
        options: {
            "Excluded Files": {
                type: "text",
                defaultValue: ""
            }
        }
    }
}