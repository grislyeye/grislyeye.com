---
title: Spark lifepath system
tags:
  - posts
  - drafts
date: 2025-11-18
layout: layouts/post.njk
randomisers: true
image: /blog/spark-lifepath-system/percy.png
---

> Or do we frame a turbulent sky with our fingers and believe that, because we have narrowed our vision to that small sphere, we have captured and contained the elements?
>
> - *Gloriana*, Michael Moorcock

![Cover of Gloriana](./content/blog/spark-lifepath-system/gloriana.png "Cover of Gloriana")

I've been throwing around the idea of using tables for all elements of my setting: rumours, locations, NPCs, etc. Everything is tabulated so that it can be randomly selected at a moments notice, during play or prep. It has a number of benefits. Firstly, it's an aid for improvisation and naturalism.

It's also a succinct way of describing your setting. With a [spark table](https://www.bastionland.com/2017/11/electric-modernity-and-spark-tables.html), and the random tables I mentioned, you can get a pretty clear expression of your world.

I've found these random tables are flexible tools, and can be used in other contexts, such as the following impromptu lifepath system. 

<aside>

If you like the live tables and dice rollers on this page, they are [re-usable widgets](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) you can use on your own pages. You can find them here:

- [\<vellum-dice>](https://github.com/grislyeye/vellum-dice)
- [\<vellum-random-table>](https://github.com/grislyeye/vellum-random-table)

You can easily wack them into Markdown files or your Blogger.com HTML.

</aside>

## Lifepath

This is a lifepath system based on *Cyberpunk RED*. You can plug your own setting/campaign tables into it to quickly create a lifepath system customised to your setting. With a few rolls, you can create rich characters that are embedded into your campaign.

Create the following tables:

* A spark table for the themes and motifs of your setting.
* A rumour table for your campaign.
* d66 tables for locations, cultures, backgrounds, and careers from your setting.
* A table of notable NPCs.

...and follow the procedure below to create a rough outline of a new character:

1. Roll for your homeland from the locations table.
2. Roll for you culture and/or background.
3. Roll for you career.
4. Roll once on the spark table for each of the following:
	1. Personality
	2. Style of appearance
	3. Distinctive feature
	4. Core value
	6. Most valued possession
	7. Life goal
5. Roll on the rumour table for an important event in your past.
6. You have <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) close friends or relationships:
	1. There is a 2-in-6 (<vellum-dice animation hidedice>1d6</vellum-dice>) chance each friend or relationship is a notable NPC, or related to one.
	2. Otherwise, roll on the spark table for each.
7. You have <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) enemies:
	1. There is a 2-in-6 (<vellum-dice animation hidedice>1d6</vellum-dice>) chance each enemy is a notable NPC, or related to one.
	2. Otherwise, roll on the spark table for each.
	3. Roll on the spark table for each to determine what the resolution might be.

You can roll as much as 30 times on the same spark table for this system, so tables may have to be large (d66 by d66, or three d20 table perhaps) to create unique outcomes for each player.

![Dismas](./content/blog/spark-lifepath-system/dismas.png "Dismas")

## Dismas Remade

This is an example of a lifepath system taken from my home campaign, [Dismas Remade](https://dismas.grislyeye.com), plugging in [random tables](#the-tables) from my GM notes:

1. [Roll for homeland](#1-roll-for-homeland).
2. [Roll for background](#2-roll-for-background).
3. [Roll for details](#4-roll-for-details):
   1. Personality
   2. Style of appearance
   3. Distinctive feature
   4. Core value
   5. Most valued possession
   6. Life goal
4. [Roll for past event](#3-roll-for-past-event).
5. [Roll for career](#5-roll-for-career).
6. Roll <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) for close friends or relationships:
   1. There is a 2-in-6 (<vellum-dice animation hidedice>1d6</vellum-dice>) chance each friend or relationship is a notable NPC, or related to one.
   2. Otherwise, roll on the spark table for each.
7. Roll <vellum-dice animation>1d10-7</vellum-dice> (ignore negatives) for enemies:
   1. There is a 2-in-6 (<vellum-dice animation hidedice>1d6</vellum-dice>) chance each enemy is a notable NPC, or related to one.
   2. Otherwise, roll on the spark table for each.
   3. Roll on the spark table for each to determine what the resolution might be.

### Example character: Percy

Let's create a sample character from the above lifepath system, as an example of how you can use it to spark together a character. Here are sample rolls generated using to the process above:

<dl>
<dt>Homeland:</dt>
<dd>Dismas</dd>

<dt>Background:</dt>
<dd>Zealots</dd>

<dt>Career:</dt>
<dd>Boater</dd>

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

<dt>Life Goal:</dt>
<dd>Perspiration Fanatic</dd>

<dt>Friends:</dt>
<dd>None</dd>

<dt>Enemy:</dt>
<dd>Notable NPC, Spark: Wail Mould, Resolution: Mutter Gawp</dd>
</dl>

To get us started, we'll call our example PC "Percy". 

<aside>

![Portrait of Percy](./content/blog/spark-lifepath-system/percy.png "Percy")

</aside>

#### Roll for homeland and background

Percy grew up among zealots in Dismas. In my setting, the lands surrounding the city are known as the "Bishopric of Dismas". Recently, religious mania swept up most of the inhabitants driving them away on a ludicrous pilgrimage, and effectively emptying the entire area. Thinking around this, our character was perhaps a child carelessly left behind, orphaned by the Mad Bishop's crusade.

#### Roll for career

We rolled his career as "boater": our character had been taken in by the river-folk who travel up and down the River Hy, ferrying ore from Skar and Woald lumber to Dismas. Percy probably made his way to Wookbridge after he was orphaned. It's a popular stop-over point for river-folk.

#### Roll for past event

From our rumour table, we know Percy is somehow involved with the secretive agreement between Dismas' thieves guild and the revolting peasants of the New Commonwealth. Interesting: I love the idea that Percy is caught between the two factions, ferrying missives between Commonwealth and Council, under the nose of the Mandatory Forces.

#### Roll for details

For Percy's personality, we must begin to interpret our spark table prompts. We have to work with "slouch maim." It implies a profound character flaw ("maim") and idleness. Clearly, Percy is somewhat lazy to the point of compulsion, used to a languid life on the river. We'll catch him napping throughout the campaign. Should be very annoying and drive a lot of delicious conflict.

Next we have the prompt for Percy's style: cold sausage. I'm going imagine that Percy suffers from a permanent feeling of cold (poor circulation?) and always wraps himself in a thick coat that smells vaguely of cooked meat.

For distinctive feature we have "swat craft." I'm going to have some fun here, and suggest that Percy is always accompained by a number of midges, attracted from the river by his odorous coat. They are a constant irritation to those around him.

His core value is "hunger maim:" after his orphan life, Percy is adament he'll never go hungry again. He is always careful to have some food on hand, and if he begins to feel hungry he comes irritable and quick to temper.

"Perspiration Fanatic" is the prompt for his life goal: pretty clearly to make his fanatical parents pay for their negligence. He uses his contacts in the shadowy underworld of Dismas to search for them.

#### Enemy

Percy doesn't have any friends as yet, but he certainly has a notable enemy. The spark for this NPC is "wail mould." This requires a lot of interpretation, but I'm going to use it to create a new faction: the Pond Guard (I feel "mould" is reminescent of pond scum), a watch force who keep the peace on the waters of the River Hy. They are known by their distinctive call. All boaters recognise this call and moor immediately and prepare to be boarded and searched. 

Percy is a person of interest to the Pond Guard, and if he's ever caught he'll be in trouble.

### The Tables

<section class="two-column">

#### 1. Roll for homeland

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

#### 2. Roll for background

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

#### 3. Roll for past event

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

</section>

#### 4. Roll for details

Roll once on the spark table for each of the following:

1. Personality
2. Style of appearance
3. Distinctive feature
4. Core value
6. Most valued possession
7. Life goal

<vellum-random-table class="two-column" select="#result" preroll hidecalc>

| d66  | Spark 1      | Spark 2    |
| ---- | ------------ | ---------- |
| 11   | Dog          | Wary       |
| 12   | Wail         | Scream     |
| 13   | Gassy        | Broken     |
| 14   | Waters       | Mended     |
| 15   | Cobbles      | Gawp       |
| 16   | Cart         | Beg        |
| 21   | Coach        | Watching   |
| 22   | Privy        | Busy       |
| 23   | Crumbs       | Puce       |
| 24   | Languid      | Grit       |
| 25   | Disappeared  | Old        |
| 26   | Incite       | Traitor    |
| 31   | Slouch       | Mould      |
| 32   | Skin         | Maim       |
| 33   | Lash         | Wealth     |
| 34   | Followed     | Fanatic    |
| 35   | Miasma       | Patrol     |
| 36   | Cold         | Craft      |
| 41   | Hungry       | Merchant   |
| 42   | Beggar       | Clerk      |
| 43   | Puke         | Damp       |
| 44   | Boil         | Burnt      |
| 45   | Rash         | Gout       |
| 46   | Miasma       | Rot        |
| 51   | Flies        | Maggot     |
| 52   | Nag          | Dung       |
| 53   | Hunger       | Shrewd     |
| 54   | Muck         | Venal      |
| 55   | Brackish     | Sausage    |
| 56   | Swat         | Irritated  |
| 61   | Pewter       | Seamstress |
| 62   | Perspiration | Pie        |
| 63   | Ruddy        | Mob        |
| 64   | Stray        | Bellow     |
| 65   | Mutter       | Caterwaul  |
| 66   | Pox          | Grumble    |

<div class="roller">
<my-button class="small">
<button>Roll</button>
</my-button>

<input id="result" type="text" />

</div>

</vellum-random-table>

#### 5. Roll for career

Lastly, roll for a grubby career from the table (adapted from [Wargod!](/products/wargod/)) below:

<vellum-random-table class="three-column" select="#result" preroll hidecalc>

|d66|Career|
|---|---|
|11|Agitator|
|12|Apothecary|
|13|Apprentice|
|14|Artist|
|15|Beggar|
|16|Boater|
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
