---
sidebar: auto
---

# Guide

## Locate your AUDICA install folder

#### On Steam

Right click on AUDICA in Steam and go to `Properties`. From there, go to `Local Files` and click `Browse...` which will open your install folder.

#### On Oculus Store

By default, Oculus games will go to the `C:\Program Files\Oculus\Software\Software` folder. Inside there should be the `harmonix-project-k` folder, which is the AUDICA install folder.





## How To Play Custom Songs

First download songs from [Maudica](https://maudica.com) then follow the PC or Quest instructions below.

### PC

1. [Locate your AUDICA install folder](https://wiki.maudica.com/guide/#locate-your-audica-install-folder)

2. Once you've located your install folder, head into `\Audica_Data\StreamingAssets\HmxAudioAssets\songs`.

3. Drag and drop your downloaded .audica files into this songs folder.

4. Once you load up AUDICA you can find your custom songs below the list of OST songs. Enjoy!

### Quest 1

1. Connect your Quest to a computer.

2. Navigate to `Quest:\Internal shared storage\Audica`.

3. Drag and drop your downloaded .audica files into this folder.

4. Once you load up AUDICA you can find your custom songs below the list of OST songs. Enjoy!

### Quest 2

1. Connect your Quest to a computer.

2. Navigate to `Quest:\Internal shared storage\Android\obb\com.harmonixmusic.kata`.

3. Drag and drop your downloaded .audica files into this folder.

4. Once you load up AUDICA you can find your custom songs below the list of OST songs. Enjoy!





## How To Use Custom Guns

### PC

1. Download custom guns from #guns in the [Audica Modding Group](https://discord.gg/cakQUt5) Discord server. **If the downloaded file is a .zip or a .rar you will need to extract it first.**
2. Place your custom gun files (.obj, .txt, .mtl) into `Audica\customization\gun`. **Do NOT put gun files into individual folders within the `gun` folder or they won't show up in-game.**
3. In-game go to `Settings` then `Customization` and you will be able to select your custom guns.

### Quest 1 & 2

1. Download custom guns from #guns in the [Audica Modding Group](https://discord.gg/cakQUt5) Discord server. **If the downloaded file is a .zip or a .rar you will need to extract it first.**
2. Place your custom gun files (.obj, .txt, .mtl) into `Quest:\Internal shared storage\Audica\customization\gun`. **Do NOT put gun files into individual folders within the `gun` folder or they won't show up in-game.**
3. In-game go to `Settings` then `Customization` and you will be able to select your custom guns.





## How To Install Mods (PC)

### Initial Setup

To use mods on AUDICA you are required to install Melonloader. It is worth noting that mods are not required to play custom songs.

1. Download and run MelonLoader.

2. Click the SELECT button in MelonLoader then, in the window that pops up, navigate to your AUDICA install folder and open Audica.exe

3. Click the INSTALL button then shortly after you should see a `INSTALL was successful!` window.

*NOTE: If you have an old version of MelonLoader you will instead see an UPDATE button and if you already have the current version of MelonLoader you will see a RE-INSTALL button.*

### Installing Mods

**To use mods in AUDICA you are required to install MelonLoader.**

1. Download a mod from [Maudica](https://maudica.com/mods). Some recommended mods can be found in the next section.

2. Place the mod's dll file into `AUDICA\Mods`.


### Recommended Mods
*When downloading a mod make sure you download the .dll file and NOT the zip or tar.gz file*

#### General
[SongBrowser](https://github.com/Silzoid/SongBrowser/releases/latest) - Browse and install custom songs in-game.

[ModBrowser](https://github.com/Contiinuum/ModBrowser/releases/latest) - Download and update mods in-game. NOTE: Updating a mod in-game requires a restart.

[ModSettings](https://github.com/octoberU/ModSettings/releases/latest) - Adjust settings for your mods in-game.

[Meeps' UI Enhancements](https://github.com/MeepsKitten/Meeps-Audica-UI-Enhancements/releases/latest) - Modifies the song screen in-game to display album art (when available) as well as a quick difficulty selector. [SongDataLoader](https://github.com/MeepsKitten/Audica-SongDataLoader/releases/latest) **is required for album art to work.**


#### For Streamers
[ScoreOverlay](https://github.com/octoberU/ScoreOverlay/releases/latest) - An overlay that can show information about the song you are currently playing (title, artist, mapper, and difficulty) as well as your score for the song.

[TwitchModifiers](https://github.com/Contiinuum/TwitchModifiers/releases/latest) - Give your Twitch viewers the power to mess with you while playing. Can be configured to use channel points. For list of chat commands visit the [TwitchModifiers](https://github.com/Contiinuum/TwitchModifiers) page.

[SongRequest](https://github.com/Silzoid/SongRequest/releases/latest) - Your Twitch chat can request songs using !asr. If you also have SongBrowser installed, chat can request songs you don't have installed yet.


#### Customization
[ArenaLoader](https://github.com/octoberU/Arena-Loader/releases/latest) - A mod to make use of custom arenas.

[ParticleKiller](https://github.com/octoberU/ParticleKiller/releases/latest) - Increase or decrease the amount of particles caused by shooting a target.


## How To Install Mods (Quest)
Currently mods cannot be used on Quest. Once MelonLoader adds support for Quest existing mods should work.

**NOTE: Custom songs and custom guns work without mods!**





## How To Use Custom Arenas

**Custom arenas are only available on PC.**

1. Install MelonLoader by following the [Initial Setup](https://wiki.maudica.com/guide/#initial-setup) guide.
2. Download [ArenaLoader](https://github.com/octoberU/Arena-Loader/releases/latest).
3. Place `ArenaLoader.dlll` into your `Mods` folder which is located in your AUDICA install folder.
4. Download custom arenas from #arenas in the [Audica Modding Group](https://discord.gg/cakQUt5) Discord server.
5. Place `.arena` files into `Audica\Mods\Arenas`. *If `Arenas` doesn't exist yet then create one.*
6. Custom arenas will show up in your settings menu below the official arenas.





## How To Make Custom Songs

The main two options for custom songs are Reaper and NotReaper.

### NotReaper

NotReaper is a community made mapper designed to be more easy to pick up and map with, especially for new people.

Its first instance was as Audica Editor by Rolo, which was forked by Cameron and became Edica. Then all development stopped so CircuitLord picked it up and then it became NotReaper.

It is still in active development, with new features being added all the time to make it more and more close to the efficiency of Reaper.


[Download (Windows)](https://github.com/octoberU/NotReaper/releases/latest)

[Download (Mac/Linux)](https://github.com/mallgrab/NotReaper/releases)

#### Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/4MIahCZRkUg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


### Reaper

Reaper is the official tool used by Harmonix to make their songs. However, it is pretty advanced. If you're already comfortable in DAWs and don't mind the learning curve, Reaper is probably the choice for you.

[Download](https://www.reaper.fm/download.php)


Harmonix has a great tutorial and documentation that you can check out here:

#### Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/l4pJV0izWHg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Tools

Here are some additional scripts to help with REAPER

[Reaper Audica Tools](https://github.com/Alternity156/ReaperAudicaTools)

#### Docs

[MIDI Authoring](/authoring/#midi-authoring)

[MIDI format](/files/#mid)
