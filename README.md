# ViCiDial Keep Alive
Welcome to my page regarding the ViCiDial Keep Alive Extension! It's a Chrome Extension that will maintain the keep alive heartbeat between ViCiDial's frontend and backend by playing discrete sounds on the agent's browser. I hope you find it useful!

# Why?
Google Chrome developers are constantly trying to make the user experience on Chrome as awesome as they possibly can with every release. One of the ways they are trying to achieve this is by throttling JavaScript execution on non-active pages to save precious resources. This is great for most users who don't want their battery being drained by a website they're not even looking at but it's bad for ViCiDial which is designed to be running JavaScript constantly on a desktop machine. Matt Florell (creator and principle maintainer of ViCiDial) has written about this problem and provided some solutions to overcome the throttling -> http://vicidial.org/docs/WEB_BROWSER_JAVASCRIPT_THROTTLING.txt this Extension is aimed at people who are not yet ready to upgrade to the latest ViCiDial code for a variety of reasons. More information can be found here -> https://www.vicidial.org/VICIDIALforum/viewtopic.php?f=2&t=37098

# Something Noteworthy
I installed Chrome 89.0.4389.114 (Official Build) (64-bit) for Windows on 7/04/21 and noticed this flag was present;

```
chrome://flags/#intensive-wake-up-throttling

Throttle Javascript timers in background.
When enabled, wake ups from DOM Timers are limited to 1 per minute in a page that has been hidden for 5 minutes. For additional details, see https://www.chromestatus.com/feature/4718288976216064. – Mac, Windows, Linux, Chrome OS, Android

#intensive-wake-up-throttling`
```

Disabling this option negates the need for this Extension. However, with Chrome flags, they can be taken away at any time without notice.

# How to Use This
1) Clone the repository using `git`, Github Desktop or download the repository as a zip file.

2) Extract zip contents to a folder on your computer.

3) Go to URL chrome://extensions in Chrome or navigate to the Extensions menu through the interface.

4) Enable `Developer Mode`.

5) Click `Load Unpacked`.

6) Select the ViCiDial Keep Alive Chrome Extension folder (ViCiDial-Keep-Alive-main\ViCiDial_Keep_Alive).

7) Make sure you copy `quiet.mp3` from the Extension's folder to your web server's `agc/sounds` directory. This is where the sound will play from.

# Known bugs
- No known at this time. If you find bugs, please report them on;

# Upcoming changes
- No upcoming changes are planned.

# Links
- Chrome 88 Throttling Prominence -> https://developer.chrome.com/blog/timer-throttling-in-chrome-88/

- Original ViCiDial thread discussing workarounds -> https://www.vicidial.org/VICIDIALforum/viewtopic.php?f=2&t=37098

- Chrome Extension -> https://chrome.google.com/webstore/detail/pof-personality-search/lodgobikogmbkkhehcidnpempfefjkmp

- Official document from ViCiDial Team -> http://vicidial.org/docs/WEB_BROWSER_JAVASCRIPT_THROTTLING.txt