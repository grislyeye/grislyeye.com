---
title: Spark lifepath system
tags:
  - posts
  - drafts
date: 2025-04-19
layout: layouts/post.njk
randomizers: true
---

There's plenty of advice out there (such as *[On writing spark tables](https://noisesanssignal.blogspot.com/2025/01/on-writing-spark-tables.html)* or *[Build An Adventure Site ](https://cairnrpg.com/first-edition/tools/build-an-adventure-site/#create-spark-tables)*) so this won't be a tutorial on

A plugin lifepath system that uses spark tables and describe setting as tables. To design your own lifepath system create:

* Create general spark tables for your setting using its common themes and motifs
* A rumour table (Random rumour tables as lore).
* d66 tables for the locations, cultures, backgrounds, and careers from your setting.
* A table of notable NPCs.

## Setting as tables

Player's can then follow this process to create their character:

1. Roll for your homeland from the locations table
2. Roll for you culture and/or background
3. Roll for you career
4. Roll once on the spark table for each of the following:
	1. Personality
	2. Style of appearance
	3. Distinctive feature
	4. Core value
	6. Most valued possession
	7. Life goal
5. Roll on the rumour table for an important event in your past.
6. You have <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) close friends or relationships:
	1. There is a 2-in-6 chance each friend or relationship is a notable NPC, or related to one
	2. Otherwise, roll on the spark table for each.
7. You have <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) enemies:
	1. There is a 2-in-6 (<vellum-dice hidedice>1d6</vellum-dice>) chance each enemy is a notable NPC, or related to one.
	2. Otherwise, roll on the spark table for each.
	3. Roll on the spark table for each to determine what the resolution might be.

This method is heavily inspired by the system from *Cyberpunk RED*. Spark tables for this system will have to be quite large (d66 by d66 perhaps) to create unique outcomes for each player.

This system requires large spark tables so as to avoid frequent duplications. You can roll 6-30 times on the same spark table (although this is unlikely), so at least three, d20 spark tables might be required.

## Dismas Remade

This is an example spark lifepath system I designed for my home campaign, [Dismas Remade](https://dismas.grislyeye.com).

<section class="two-column">

<vellum-random-table select="#result" preroll hideroll>

| 1d12           | Locations                     |
| -------------- | ----------------------------- |
| 1              | The Marches                   |
| 2              | Dorshire                      |
| 3              | Dismas                        |
| 4              | Whiterock                     |
| 5              | Skar                          |
| 6              | Hywyck                        |
| 7              | Nunstable                     |
| 8              | Dismas Bishopric              |
| 9              | Wookbridge                    |
| 10             | Freham                        |
| 11             | The Wash                      |
| 12             | Roll on the Other Lands table. |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

<vellum-random-table select="#result" preroll hideroll>

| 1d15           | Other Lands        |
| -------------- | ------------------ |
| 1              | New Commonwealth   |
| 2              | Ill North          |
| 3              | Shining Lands      |
| 4              | Easterly Sea       |
| 5              | Catcalls           |
| 6              | Jinibia            |
| 7              | Midlands           |
| 8              | The Grey Woald     |
| 9              | Kastenburg         |
| 10             | Faro               |
| 11             | Duchy of Castantis |
| 12             | Burgendorf Hills   |
| 13             | The Crag           |
| 14             | Qua'lathia         |
| 15             | Port Red Sand      |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

<vellum-random-table select="#result" preroll hideroll>

| 1d7           | Background  |
| ------------- | ----------- |
| 1             | Farmer      |
| 2             | Mercenary   |
| 3             | Witchfinder |
| 4             | Conscript   |
| 5             | Fisherman   |
| 6             | Miner       |
| 7             | Servant     |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

<vellum-random-table select="#result" preroll hideroll>

| d36           | Spark 1                                          | Spark 2                                          |
| ------------- | ------------------------------------------------ | ------------------------------------------------ |
| 1             | Dog                                              | Wary                                             |
| 2             | Wail                                             | Scream                                           |
| 3             | Gassy                                            | Broken                                           |
| 4             | Waters                                           | Mended                                           |
| 5             | Cobbles                                          | Gawp                                             |
| 6             | Cart                                             | Beg                                              |
| 7             | Coach                                            | Watching                                         |
| 8             | Privy                                            | Busy                                             |
| 9             | Crumbs                                           | Puce                                             |
| 10            | Languid                                          | Grit                                             |
| 11            | Disappeared                                      | Old                                              |
| 12            | Incite                                           | Traitor                                          |
| 13            | Slouch                                           | Mould                                            |
| 14            | Skin                                             | Maim                                             |
| 15            | Lash                                             | Wealth                                           |
| 16            | Followed                                         | Fanatic                                          |
| 17            | Miasma                                           | Patrol                                           |
| 18            | Cold                                             | Craft                                            |
| 19            | Hungry                                           | Merchant                                         |
| 20            | Beggar                                           | Clerk                                            |
| 21            | Puke                                             | Damp                                             |
| 22            | Boil                                             | Burnt                                            |
| 23            | Rash                                             | Gout                                             |
| 24            | Miasma                                           | Rot                                              |
| 25            | Flies                                            | Maggot                                           |
| 26            | Nag                                              | Dung                                             |
| 27            | Hunger                                           | Shrewd                                           |
| 28            | Muck                                             | Venal                                            |
| 29            | Brackish                                         | Sausage                                          |
| 30            | Swat                                             | Irritated                                        |
| 31            | Pewter                                           | Seamstress                                       |
| 32            | Perspiration                                     | Pie                                              |
| 33            | Ruddy                                            | Mob                                              |
| 34            | Stray                                            | Bellow                                           |
| 35            | Mutter                                           | Caterwaul                                        |
| 36            | Pox                                              | Grumble                                          |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

</section>

<vellum-random-table class="three-column" select="#result" preroll hideroll>

|d66|Career|
|---|---|
|11|Agitator|
|12|Apothecary|
|13|Apprentice|
|14|Artist|
|15|Beggar|
|16|Boatman|
|21|Bounty Hunter|
|22|Burglar|
|23|Clerk|
|24|Entertainer|
|25|Fanatic|
|26|Fey Exile|
|31|Footpad|
|32|Gambler|
|33|Grave Robber|
|34|Hermit|
|35|Hunter|
|36|Initiate|
|41|Labourer|
|42|Miner|
|43|Mercenary|
|44|Mountebank|
|45|Noble|
|46|Novitiate|
|51|Outlaw|
|52|Pedlar|
|53|Rat-catcher|
|54|Ruffian|
|55|Sailor|
|56|Servant|
|61|Smuggler|
|62|Soldier|
|63|Squire|
|64|Traveller|
|65|Watchmen|
|66|Woodsman|

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>
