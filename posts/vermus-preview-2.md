---
title: Vermus Wracks
date: 2017-02-26
collection: articles
layout: post.hbs
id: vermus-preview-1
---
<p>Continuing <a href="/vermus-preview-1.html">our series</a> of posts about the vermus, we introduce the wracks:</p>

<p>The ratfolk's hardy constitution make them resistant to diseases. However, sometimes them succumb to plagues but do no die. Instead, they live on as foul <em>wracks</em>.</p>

<p>Delirious with fever, eyes rolling, fur wet with sweat, mouths foaming. The ravings of wracks are considered sacred by the vermus. It is thought their feverish mental state allows them to commune with dark spirits and gods of pestilence. At once holy men and pariahs, the vermus care for them but keep them muzzled and chained. In times of need they work them into a frenzy to release against their foes.</p>

<p>These wretches accumulate diseases like a miser collects coin. They then act as carriers. Left unchecked, they can spread plague across whole cities.</p>

<div>
  <vellum-stat-block class="stat-block" id="vermus-wrack" itemscope itemtype="http://rgladwell.github.io/vellum-schemas/monster.html">

    <dl>
      <dt>Name</dt><dd itemprop="name">Vermus Wrack</dd>
      <dt>Size</dt><dd itemprop="size">Small</dd>
      <dt>Type</dt><dd itemprop="type">humanoid (vermus)</dd>
      <dt>Alignment</dt><dd itemprop="alignment">chaotic neutral</dd>

      <dt>Armor Class</dt><dd itemprop="ac">12 (natural armor)</dd>
      <dt>Hit Points</dt><dd><span itemprop="hp">8</span> (<span itemprop="hitDie">3d6 - 2</span>)</dd>
      <dt>Speed</dt><dd itemprop="speeds">30 ft.</dd>

      <dt>Strength</dt><dd itemprop="str">7</dd>
      <dt>Dexterity</dt><dd itemprop="dex">14</dd>
      <dt>Constitution</dt><dd itemprop="con">8</dd>
      <dt>Intelligence</dt><dd itemprop="int">7</dd>
      <dt>Wisdom</dt><dd itemprop="wis">12</dd>
      <dt>Charisma</dt><dd itemprop="cha">7</dd>

      <dt>Saving Throws</dt><dd itemprop="savingThrows">Cons +1</dd>
      <dt>Skills</dt><dd itemprop="skills">Perception +3</dd>
      <dt>Senses</dt><dd itemprop="senses">darkvision 60 ft.</dd>
      <dt>Senses</dt><dd itemprop="senses">passive Perception 13</dd>
      <dt>Languages</dt><dd itemprop="languages">Common</dd>
      <dt>Challenge</dt><dd itemprop="cr">1/2</dd>
      <dt>XP</dt><dd itemprop="xp">100</dd>

    </dl>

    <ol>

      <li itemprop="specialTraits" itemscope>
        <span itemprop="name">Keen Smell</span>
        <span itemprop="description">Vermus have advantage on Wisdom (Perception) checks that rely on smell.</span>
      </li>

      <li itemprop="specialTraits" itemscope>
        <span itemprop="name">Rabid</span>
        <span itemprop="description">At the start of its turn, the vermus can gain advantage on all melee attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.</span>
      </li>

      <li itemprop="specialTraits" itemscope>
        <span itemprop="name">Squirm</span>
        <span itemprop="description">Vermus can crawl through spaces much smaller than their size (2 ft. or larger) and can pass through the space of any Medium or larger creature as though they were Tiny.</span>
      </li>

      <li itemprop="actions" itemscope>
        <span itemprop="name">Bite</span>
        <data itemprop="type" value="melee-attack">Melee Weapon Attack</data>: <span itemprop="bonus">+4</span> to hit, reach <span itemprop="reach">reach 5 ft.</span>, <span itemprop="target">one target</span>. Hit: <span itemprop="damage">4 (1d4 + 2)</span> <span itemprop="damageType">piercing</span> damage <span itemprop="notes">. The target must succeed on a DC 11 Constitution saving throw or becomes infected with a temporary, random effect from the diseased bite. The effect begins at start of the target's turn and lasts until the start of its next turn. Roll 1d6 to determine the effect.</span>

        <ul>
          <li itemscope itemprop="randomEffects"><strong itemprop="roll">1</strong> <span itemprop="name">Rabid</span> <span itemprop="effect">The target becomes rabid and uses any actions it has this turn to make melee attacks against its nearest ally.</span></li>
          <li itemscope itemprop="randomEffects"><strong itemprop="roll">2</strong> <span itemprop="name">Paralysed</span> <span itemprop="effect">The target becomes paralysed.</span></li>
          <li itemscope itemprop="randomEffects"><strong itemprop="roll">3-5</strong> <span itemprop="name">Poisoned</span> <span itemprop="effect">The target becomes poisoned and takes 1d4 poison damage.</span></li>
          <li itemscope itemprop="randomEffects"><strong itemprop="roll">6</strong> <span itemprop="name">Blinded</span> <span itemprop="effect">The target becomes blinded.</span></li>
        </ul>
      </li>

    </ol>

  </vellum-stat-block>
</div>
