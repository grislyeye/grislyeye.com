---
title: The Many Preview 1
date: 2018-03-06
collection: articles
layout: post.hbs
id: many-preview-1
---
<p>Halfway decent rules for mass combat is the holy grail for D&amp;D. Our upcoming monograph, <strong>The Many</strong>, will use the rules for swarms from the <em>Monster Manual</em> to simulate battles. This has several advantages over other mass combat systems:</p>

<ul>
  <li><strong>Simplicity.</strong> Re-uses the familiar rules for combat.</li>
  <li><strong>Agency.</strong> Individual characters can still affect the outcome of a battle.</li>
  <li><strong>Awesomeness.</strong> Powerful characters can feel awesome by going toe-to-toe with whole armies.</li>
  <li><strong>Mooks.</strong> Re-introduces the concept of minions from 4th Edition <em>Dungeons and Dragons</em>.</li>
</ul>

<p><strong>The Many</strong> will introduce new stat blocks for humanoid <q>swarms</q>, or <em>units</em>. The party could face these units in battle, or command them against opposing forces.</p>

<div class="stat-block">
  <img src="images/infantry.png" class="background" style="height: 640px; width: auto" alt="Infantry Illustration">

  <vellum-stat-block id="infantry-unit" itemscope itemtype="http://rgladwell.github.io/vellum-schemas/monster.html">

  <dl>
    <dt>Name</dt><dd itemprop="name">Infantry Unit</dd>
    <dt>Size</dt><dd itemprop="size">Large</dd>
    <dt>Type</dt><dd itemprop="type">swarm of Medium humanoids (any race)</dd>
    <dt>Alignment</dt><dd itemprop="alignment">any alignment</dd>

    <dt>Armor Class</dt><dd itemprop="ac">14 (Chain shirt)</dd>
    <dt>Hit Points</dt><dd><span itemprop="hp">33</span> (<span itemprop="hitDie">6d8+6</span>)</dd>
    <dt>Speed</dt><dd itemprop="speeds">30 ft.</dd>

    <dt>Strength</dt><dd itemprop="str">13</dd>
    <dt>Dexterity</dt><dd itemprop="dex">12</dd>
    <dt>Constitution</dt><dd itemprop="con">12</dd>
    <dt>Intelligence</dt><dd itemprop="int">10</dd>
    <dt>Wisdom</dt><dd itemprop="wis">11</dd>
    <dt>Charisma</dt><dd itemprop="cha">10</dd>

    <dt>Senses</dt><dd itemprop="senses">passive Perception 10</dd>
    <dt>Challenge</dt><dd itemprop="cr">2</dd>
    <dt>Challenge</dt><dd itemprop="xp">450</dd>

    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">charmed</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">frightened</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">paralyzed</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">petrified</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">prone</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">restrained</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">stunned</dd>
  </dl>

  <ol>

    <li itemprop="specialTraits" itemscope>
      <span itemprop="name">Military Discipline</span>
      <span itemprop="description">While the unit has more than half of its hit points, it adds 2 to its AC against one melee attack that would hit it. To do so, the unit must see the attacker.</span>
    </li>

    <li itemprop="specialTraits" itemscope>
      <span itemprop="name">Swarm</span>
      <span itemprop="description">The unit can occupy another creature's space and vice versa, and the unit can move through any opening large enough for a Medium humanoid. The unit can't regain hit points or gain temporary hit points.</span>
    </li>

    <li itemprop="actions" itemscope>
      <span itemprop="name">Shortsword</span>
      <span><data itemprop="type" value="melee-attack">Melee Attack</data>: <span itemprop="bonus">+3</span> to hit, reach <span itemprop="reach">5 ft.</span>, <span itemprop="target">one target</span>. Hit: <span itemprop="damage">27 (6d6 + 6)</span> <span itemprop="damageType">slashing</span> damage <span itemprop="notes">, or 17 (3d6 + 3) slashing damage if the unit has half of its hit points or fewer.</span></span>
    </li>

    <li itemprop="actions" itemscope>
      <span itemprop="name">Shortbow</span>
      <span><data itemprop="type" value="ranged-attack">Ranged Attack</data>: <span itemprop="bonus">+3</span> to hit, reach <span itemprop="reach">5 ft.</span>, <span itemprop="target">one target</span>. Hit: <span itemprop="damage">27 (6d6 + 6)</span> <span itemprop="damageType">piercing</span> damage <span itemprop="notes">, or 17 (3d6 + 3) piercing damage if the unit has half of its hit points or fewer.</span></span>
    </li>
  </ol>

  </vellum-stat-block>
</div>

<div class="stat-block-left">
  <img src="images/grim-folk.jpg" class="background" style="height: 600px; width: auto" alt="Commoners Illustration">
  <vellum-stat-block id="commoner-mob" itemscope itemtype="http://rgladwell.github.io/vellum-schemas/monster.html">

  <dl>
    <dt>Name</dt><dd itemprop="name">Commoner Mob</dd>
    <dt>Size</dt><dd itemprop="size">Large</dd>
    <dt>Type</dt><dd itemprop="type">swarm of Medium humanoids (any race)</dd>
    <dt>Alignment</dt><dd itemprop="alignment">any chaotic</dd>

    <dt>Armor Class</dt><dd itemprop="ac">10</dd>
    <dt>Hit Points</dt><dd><span itemprop="hp">45</span> (<span itemprop="hitDie">10d8</span>)</dd>
    <dt>Speed</dt><dd itemprop="speeds">30 ft.</dd>

    <dt>Strength</dt><dd itemprop="str">15</dd>
    <dt>Dexterity</dt><dd itemprop="dex">10</dd>
    <dt>Constitution</dt><dd itemprop="con">10</dd>
    <dt>Intelligence</dt><dd itemprop="int">10</dd>
    <dt>Wisdom</dt><dd itemprop="wis">10</dd>
    <dt>Charisma</dt><dd itemprop="cha">10</dd>

    <dt>Senses</dt><dd itemprop="senses">passive Perception 10</dd>
    <dt>Challenge</dt><dd itemprop="cr">2</dd>
    <dt>Challenge</dt><dd itemprop="xp">450</dd>

    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">charmed</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">frightened</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">paralyzed</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">petrified</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">prone</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">restrained</dd>
    <dt>Condition Immunities</dt><dd itemprop="conditionImmunities">stunned</dd>
  </dl>

  <ol>
    <li itemprop="specialTraits" itemscope>
      <span itemprop="name">Vandalism</span>
      <span itemprop="description">While the mob has more than half of its hit points, once per turn, it can deal an extra 7 (2d6) damage to an object it hits with a weapon attack.</span>
    </li>

    <li itemprop="specialTraits" itemscope>
      <span itemprop="name">Swarm</span>
      <span itemprop="description">The mob can occupy another creature's space and vice versa, and the mob can move through any opening large enough for a Medium humanoid. The mob can't regain hit points or gain temporary hit points.</span>
    </li>

    <li itemprop="actions" itemscope>
      <span itemprop="name">Improvised Weapons</span>
      <span><data itemprop="type" value="melee-attack">Melee Attack</data>: <span itemprop="bonus">+4</span> to hit, reach <span itemprop="reach">5 ft.</span>, <span itemprop="target">one target</span>. Hit: <span itemprop="damage">25 (10d4)</span> <span itemprop="damageType">bludgeoning</span> damage <span itemprop="notes">, or 10 (4d4) bludgeoning damage if the mob has half of its hit points or fewer.</span></span>
    </li>
  </ol>

  </vellum-stat-block>
</div>
