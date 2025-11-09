---
title: Spark lifepath system
tags:
  - posts
  - drafts
date: 2025-04-19
layout: layouts/post.njk
randomisers: true
---

> Or do we frame a turbulent sky with our fingers and believe that, because we have narrowed our vision to that small sphere, we have captured and contained the elements?
>
> - *Gloriana*, Michael Moorcock

One of the ideas I've been throwing about is "Tables For Everything," as an aid for improvisation, but also for naturalism. When I say tables for everything, I mean for all elements of my setting: rumours, locations, NPCs, etc. Every is tabulated so that it can be randomly selected, at a moments notice during a game, or more importantly (at least for me) for prep. Situations, characters and other details are interpreted from the roll of a dice.

Another principle I'm chewing over is that "All Rolls Should Stand." When I choose to roll, I never ignore or re-roll results. It keeps my honest. I may reintepret results, but I always use the core concepts. I feel it maintains a sense of realism, a sense of depth, a sense of a larger world, and sends the action into strange, new angles.

But it confounds expectations, which I feel is vital to entertainment.

Tables for Everything has many uses, but one in particular I've been messing around with is a lifepath system.

<aside>

If you like the live tables and dice rollers on this page, they are [re-usable widgets](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) you can use on your own pages. You can find them here:

- [\<vellum-dice>](https://github.com/grislyeye/vellum-dice)
- [\<vellum-random-table>](https://github.com/grislyeye/vellum-random-table)

You can easily wack them into Markdown files or your Blogger.com HTML.

</aside>

## Lifepath

A plugin lifepath system that uses spark tables and describe setting as tables. To design your own lifepath system create:

To design your own lifepath system create:

* Create spark tables for your setting, using its common themes and motifs.
* A rumour table.
* d66 tables for the locations, cultures, backgrounds, and careers from your setting.
* A table of notable NPCs.

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

This method is heavily inspired by the system from *Cyberpunk RED*. Spark tables for this system may have to be larger (d66 by d66 perhaps) to create unique outcomes for each player.

This system requires large spark tables so as to avoid frequent duplications. You can roll 6-30 times on the same spark table (although this is unlikely), so at least three, d20 spark tables might be required.

## Dismas Remade

This is an example spark lifepath system I designed for my home campaign, [Dismas Remade](https://dismas.grislyeye.com).

### Example character

Let's create a sample character from the above lifepath system, as an example of how you can use the above to spark together a character. Here is an example of the rolls according to the process above:

<dl>
<dt>Homeland:</dt>
<dd>Dismas</dd>

<dt>Background:</dt>
<dd>Zealots</dd>

<dt>Career:</dt>
<dd>Boatman</dd>

<dt>Past event:</dt>
<dd>The Thieves' Council's agreement with the New Commonwealth.</dd>

<dt>Personality</dt>
<dd>Slouch Maim</dd>

<dt>Style:</dt>
<dd>Cold Sausage</dd>

<dt>Distinctive feature:</dt>
<dd>Swat Craft</dd>

<dt>Core value:</dt>
<dd>Hunger Maim</dd>

<dt>Prize possession:</dt>
<dd>Followed Dung</dd>

<dt>Life Goal:</dt>
<dd>Perspiration Fanatic</dd>

<dt>Friends:</dt>
<dd>None</dd>

<dt>Enemy:</dt>
<dd>Notable NPC, Spark: Wail Mould, Resolution: Mutter Gawp</dd>
</dl>

Let's begin with the homeland and background first. Our character is from Dismas and grew up among zealots. In my setting, the lands surrounding are are known as the "Bishopric of Dismas". Recently, a religious mania swept most of the inhabitants away, effectively emptying the entire area. Our character was perhaps a child left behind, an orphan of the Mad Bishop's crusade.

We rolled his career as "boatman", so I'm going to interpret that as they had been taken in by the river folk who travel up and down the River Hy, ferrying ore from Skar, and Woald lumber, to Dismas. They probably made their way to Wookbridge after they were orphaned. It's a popular stop-over point for river folk.

<section class="two-column">

### 1. Roll for homeland

Roll for your homeland from the locations table below. If you roll a 12, roll on the Other Lands table below that for a more uncommon land of origin.

<vellum-random-table select="#result" preroll hidecalc>

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

<vellum-random-table select="#result" preroll hidecalc>

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

<section class="small">

### 2. Roll for background

Roll on the table below for your background.

<vellum-random-table select="#result" preroll hidecalc>

| 1d6           | Background  |
| ------------- | ----------- |
| 1             | Farmer      |
| 2             | Zealots     |
| 3             | Conscript   |
| 4             | Fisherman   |
| 5             | Miner       |
| 6             | Servant     |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

</section>

<section class="small">

### 3. Roll for past event

<vellum-random-table select="#result" preroll hidecalc>

| Rumour                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The Thieves' Council's plans to infiltrate North Dismas.                                                                                                                                                       |
| The Thieves' Council's search for access to North Docks through the Deadside.                                                                                                                              |
| The White Alchemist's obsession with Veronica Dan.                                                                                                                                                         |
| The Thieves' Council's negotiations with Old Spit.                                                                                                                                                             |
| The Thieves' Council's agreement with the New Commonwealth.                                                                                                                                                    |
| The Wretched Parliament nest in The Embers.                                                                                                                                                                |
| The Locksmith's Guild's negotiations with the Jinibian Concern to take control of Dismas.                                                                                                              |
| The Merchant's letters to Droop.                                                                                                                                                                               |
| Droop deal with Night Queen Creed to kill Mother Maude in exchange for a position for Cult of the Bastard on the Thieves' Council.                          |
| The Shades lust for a permanent entrance into the mortal realm.                                                                                                                                                |

<div class="roller">

<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

</section>

### 4. Roll for details

Roll once on the spark table for each of the following:

1. Personality
2. Style of appearance
3. Distinctive feature
4. Core value
6. Most valued possession
7. Life goal

<vellum-random-table select="#result" preroll hidecalc>

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

### 5. Roll for career

Lastly, roll for a grubby career from the table (adapted from [Wargod!](/products/wargod/)) below:

<vellum-random-table class="three-column" select="#result" preroll hidecalc>

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
