module.exports = {
	entry: async function (QuickAdd, settings) {
		const adapter = this.app.vault.adapter;
		const idKey = 'quickadd-change-style-settings@id';

		const styleSettingsDir = `${this.app.vault.configDir}/plugins/obsidian-style-settings`;
		const switchedId = settings['ID'];

		const dataPath = `${styleSettingsDir}/data.json`;
		const dataText = await adapter.read(dataPath);
		const data = JSON.parse(dataText);

		async function saveCurrentSettings() {
			console.log('data:');
			console.log(data);
			if (data.hasOwnProperty(idKey)) {
				const currentId = data[idKey];
				console.log(currentId);
				console.log(
					`Wrote to ${styleSettingsDir}/loadout-${encodeURI(
						currentId
					)}.json`
				);
				await adapter.write(
					`${styleSettingsDir}/loadout-${encodeURI(currentId)}.json`,
					dataText
				);
			} else {
				const timeString = moment().format('YYYY-MM-DDTHH-mm');
				console.log(
					`Wrote to ${styleSettingsDir}/loadout-backup-${timeString}.json`
				);
				await adapter.write(
					`${styleSettingsDir}/loadout-backup-${timeString}.json`,
					dataText
				);
			}
		}
		async function switchLoadout() {
			const encodedSwitchedId = encodeURI(switchedId);
			console.log('encodedSwitchedId: ' + encodedSwitchedId);
			const switchedLoadoutPath = `${styleSettingsDir}/loadout-${encodedSwitchedId}.json`;

			console.log('switchedLoadoutPath: ' + switchedLoadoutPath);
			const previousLoadoutExists = await adapter.exists(
				switchedLoadoutPath
			);
			console.log('previousLoadoutExists: ' + previousLoadoutExists);

			if (previousLoadoutExists) {
				let switchedLoadoutText = await adapter.read(
					switchedLoadoutPath
				);
				let switchedLoadout = JSON.parse(switchedLoadoutText);
				console.log('switchedLoadout: ');
				console.log(switchedLoadout);
				if (!switchedLoadout.hasOwnProperty(idKey)) {
					switchedLoadout[idKey] = switchedId;

					switchedLoadoutText = JSON.stringify(
						switchedLoadout,
						undefined,
						4
					);
					console.log('switchedLoadoutText: ');
					console.log(JSON.parse(switchedLoadoutText));
					await adapter.write(
						switchedLoadoutPath,
						switchedLoadoutText
					);
				}
				await adapter.write(dataPath, switchedLoadoutText);
			} else {
				data[idKey] = switchedId;
				console.log('data:');
				console.log(data);
				await adapter.write(
					dataPath,
					JSON.stringify(data, undefined, 4)
				);
				new Notice(
					`QuickAdd change-style-settings macro: A new Style Settings loadout (${switchedId}) was created from your current loadout. This is usually because it is your first time switching to this loadout.`,
					10 * 1000
				);
			}
		}
		await saveCurrentSettings();
		await switchLoadout();
		await app.plugins.plugins["obsidian-style-settings"].unload();
		await app.plugins.plugins["obsidian-style-settings"].load();
	},
	settings: {
		name: 'Change Style Settings',
		author: 'AmericanBagel',
		options: {
			ID: {
				type: 'text',
				description:
					'ID of this style settings loadout to save the settings before switching to another loadout with this macro',
				defaultValue: '',
			},
		},
	},
};
