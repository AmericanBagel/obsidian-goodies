# obsidian-quickadd-macros
A collection of my QuickAdd macros for Obsidian

> :rotating_light: I am not responsible if any of these damage your vault. I made these for myself and only tested them in my personal vault on my personal computer.
> If you have *any* files you care about, you should *already* be using some form of version control or automated backups.
> I don't expect anything to go wrong, but you never know.

## Macros
### change-style-settings
My favorite macro, it allows you to have different (Style Settings)[https://github.com/mgmeyers/obsidian-style-settings] "loadouts", each with their own ID. Just create a separate QuickAdd macro for each loadout with an ID set in the config menu for the scripts.

After you've switched into your loadout, configure your Style Settings to your heart's content, and, when you switch to another loadout, your previous configurations will be safe!

I use this macro so I can have different theme settings for different workspaces! I use a QuickAdd macro which runs other macros along with the Workspaces Plus plugin to switch.

### change-excluded-files
This allows you to change your excluded files! Where it gets powerful is when you have multiple macros running this script, each with their own excluded files. I use this to operate one megavault that *feels* like different, separate vaults but without any of the downsides.

Just input your excluded files, either a substring or regex, into the settings, **separated by colons ":"** (not commas because they can be in Obsidian file names).

### change-graph-filters
For when you *really* need to have distinct workflows, you can use this script with multiple macros, each with their own settings, to have different graph filter presets to switch between. Really good for edge cases which Change Excluded Files doesn't cover.
