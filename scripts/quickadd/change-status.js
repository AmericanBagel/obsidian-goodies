module.exports = {
	entry: async function (QuickAdd, settings) {
        console.log(QuickAdd);
		// String of text to find in the file
		let find = settings['Find'];
        let flags = settings['Flags'];
		// String of text to replace all strings matching "Find"
        let regex = new RegExp(find, flags);
		let replace = settings['Replace'];
		// Folder to move current file to after finding & replacing
		let folder = settings['Folder'];

        console.log(settings);

		//===// Find, replace, and move file //===//
		// Destructure the app and quickAddApi objects from params
        const { app } = QuickAdd;
        // Get the current file
        const file = app.workspace.getActiveFile();
        // Get the file contents
        const content = await app.vault.read(file);
        console.log(content);
        // Replace all matches of REGEX with REPLACEMENT
        const newContent = content.replace(regex, replace);
        console.log(newContent)
        // Write the new content to the file
        await app.vault.modify(file, newContent);
        // Move the file to FOLDER
        await app.vault.rename(file, `${folder}/${file.name}`);
	},
	settings: {
		name: 'Find, Replace, and Move',
		author: 'AmericanBagel',
		options: {
			Find: {
				type: 'input',
                description: "Regex to replace. Use the /g flag at the end to replace all instances.",
			},
            Flags: {
				type: 'input',
                description: "RegExp flags",
                defaultValue: "gm"
			},
			Replace: {
				type: 'text',
                description: "String to replace regex matches from find",
				defaultValue: '',
			},
			Folder: {
				type: 'text',
				defaultValue: '',
			},
		},
	},
};
