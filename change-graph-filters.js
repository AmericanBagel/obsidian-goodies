// app.internalPlugins.plugins.graph.instance.options.search
module.exports = {
    entry: async function(QuickAdd, settings) {
        app.internalPlugins.plugins.graph.instance.options.search = settings["Filter"];
        searchInput = document.querySelector(".graph-controls .search-input-container > input");
        searchInput.value = settings["Filter"];

        const inputEvent = new Event('input');
        searchInput.dispatchEvent(inputEvent);

    },
    settings: {
        name: "Change graph filters",
        author: "AmericanBagel",
        options: {
            "Filter": {
                type: "text",
                defaultValue: ""
            }
        }
    }
}