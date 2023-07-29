# obsidian-goodies
A collection of my Obsidian goodies, including QuickAdd macros and snippets

> 🚨 I am not responsible if any of these damage your vault. I made these for myself and only tested them in my personal vault on my personal computer.
> If you have *any* files you care about, you should *already* be using some form of version control or automated backups.
> I don't expect anything to go wrong, but you never know.

## Scripts
### QuickAdd Macro Scripts
#### change-style-settings
My favorite macro, it allows you to have different (Style Settings)[https://github.com/mgmeyers/obsidian-style-settings] "loadouts", each with their own ID. Just create a separate QuickAdd macro for each loadout with an ID set in the config menu for the scripts.

After you've switched into your loadout, configure your Style Settings to your heart's content, and, when you switch to another loadout, your previous configurations will be safe!

I use this macro so I can have different theme settings for different workspaces! I use a QuickAdd macro which runs other macros along with the Workspaces Plus plugin to switch.

#### change-excluded-files
This allows you to change your excluded files! Where it gets powerful is when you have multiple macros running this script, each with their own excluded files. I use this to operate one megavault that *feels* like different, separate vaults but without any of the downsides.

Just input your excluded files, either a substring or regex, into the settings, **separated by colons ":"** (not commas because they can be in Obsidian file names).

#### change-graph-filters
For when you *really* need to have distinct workflows, you can use this script with multiple macros, each with their own settings, to have different graph filter presets to switch between. Really good for edge cases which Change Excluded Files doesn't cover.

## CSS Snippets
I write most of my CSS snippets in SCSS to make it quick to write and maintainable. Plain CSS just isn't sustainable to write in because of the hacky nature of CSS snippets.

### link-emoji-tag-prefixes
DEPENDS ON (https://github.com/mdelobelle/obsidian_supercharged_links)[Supercharged Links]

This snippet allows you to have a set of primary tags and secondary tags with emojis which display as a prefix before links. In my case, I have statuses ranging from seedling 🌱 to evergreen 🌲, with types such as note 🗒️, link 🔗, and MOC 🗺️. The CSS snippet will generate code for every combination of these tags, with the primary tags displaying first. This will create a nice visual indicator of what the important tags are in a file's link, both in the file explorer and in preview mode.

### anuppuccin-custom-folder-colors
DEPENDS ON (https://github.com/anubisnekhet/anuppuccin)[AnuPpuccin]

I love the rainbow file explorer colors in the (https://github.com/anubisnekhet/anuppuccin)[AnuPpuccin] theme, but I want some of my folders to have specific colors outside the rainbow order. This script allows you to do just that!

Just set the path of the folder in the first argument and the color (or color variable) as the second argument in the @include line on the bottom of the file.
