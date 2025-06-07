---
title: A few words on Swapdoodle
description: I never thought we'd get this far.
lang: en
date: 2025-06-07 21:31:00
---

I don't remember when we got the idea nor who came up with it.

All I remember now is that me and my friend [Charlotte](https://github.com/centdemeern1) once decided: *We'll make Swapdoodle work again, even if it takes us years*. And so we started experimenting.

Some of you that read my blog might not know what Swapdoodle is. <span style="opacity:0.5">(Hi Monika!)</span> In short, it's an app for the Nintendo 3DS game console that allows you to send hand-written messages to your friends.

As with all 3DS applications, it stopped working on April 8th, 2024, when Nintendo shut down the servers. Fortunately, services offering fan-made game servers do exist! [Pretendo Network](https://pretendo.network/) is the *de facto* new official server. They've made incredible progress, but they do not support many games. Swapdoodle was a favourite title, sure, and many people asked Pretendo when they would bring support for it, or at least wished for it.  
**I was among them.**

Eventually, I grew a bit... Impatient? I understood that Pretendo had better stuff to do, but I still missed the vibe of coming home from school and seeing that blue notification light come on. I *desperately* wanted Swapdoodle back. It had a unique charm most 3DS apps just missed. I shared this frustration with my friends whom I'd exchanged Swapdoodle notes with. One of my friends even joked that I'd eventually be the one to bring it back. <span style="opacity:0.5">And you were right, Zoey.</span>

# Coding a game server

When I first started looking into Swapdoodle with Charlotte, I had **no** idea where to start. Luckily, I found [MatthewL246](https://github.com/MatthewL246)'s [pretendo-docker](https://github.com/MatthewL246/pretendo-docker), which offers a brilliant starting point for any kind of tinkering. It allows you to effortlessly set up a locally-hosted Pretendo instance for you to play with. After installing it, I toyed around with the proxy it configures for you - it allows one to view what URLs the console is connecting to and what it is sending. I quickly discovered the server that once served as the Swapdoodle server: [http://hpp-001a2c00-l1.n.app.nintendowifi.net](http://hpp-001a2c00-l1.n.app.nintendowifi.net).

At that point, I had no idea what HPP even meant <span style="opacity:0.5">(this will be important later)</span>, and began frantically analyzing the packets sent. I understood something, but not nearly enough to recreate a full server. I even asked on the Pretendo Discord to see if I could gain access to some network traffic captures, to understand the format a bit more, but didn't get anything. It makes sense in hindsight - captures do contain a lot of personal information that a random guy from Eastern Europe should *absolutely not* have access to. I felt defeated, not knowing what to do. So we took a small detour...

# Screw it, we're making a file editor instead

There's a Swapdoodle article on 3DBrew, a wiki describing almost everything related to the 3DS. Among other things, it details the *structure* of the files Swapdoodle uses internally. I intentionally said **structure** there - the custom file format it uses, BPK1, serves as a container. A custom `.zip` file, if you will. We decided to unravel that secret while we were stuck on the Swapdoodle server. Our goal was to understand the format Swapdoodle uses for the actual drawings - the app allows you to view a timelapse of how the drawing was made, so it can't be a simple image file. 

A couple of tries later, we figured it out. The format uses four-byte sequences, each describing a stroke on the canvas. And let me just say - ***Who the hell thought this was a good idea???*** Look at it! It's insane!

![Image of the file format](/blog-assets/weird-ass-format.png)

The X-Y coordinates of the stroke are *SPLIT* like that. Why?! There are ever so many better options, but the engineers at Nintendo did this. Smh. 

I quickly whipped together a viewer for Swapdoodle files, which soon turned into a dedicated web app backed by a component Charlotte wrote in the Rust programming language. Neat!

It was around that time I stumbled upon a page describing something called HPP. Wait, doesn't that sound familiar?

# Turns out it's all been discovered already

Pretendo's most important project is [nex-go](https://github.com/PretendoNetwork/nex-go/), an implementation of NEX. Nintendo didn't write its netplay from the ground up, but instead licensed NEX from the French company Quazal. I knew that before, but what I didn't know is that it had an HTTP version, called... HPP. Those packets I had been looking into were just standard NEX packets. And to make it even better, Pretendo had even made abstractions for hosting a HPP server! It was time to take a dive again... and learn the Go programming language, since that's what Pretendo uses.

It didn't take long and we were able to *upload* Swapdoodle notes flawlessly! We were excited to be moving forward again, but then hit another roadblock. All this time, we had been going off of the proxy captures, i.e. analyzing what our consoles were *sending*. We didn't know how the server was supposed to send notifications *back* to the console, since that was a task for the original server that we were trying to recreate. We initially assumed that they would be delivered using SpotPass (a 3DS content delivery service that Pretendo has also implemented), but were quickly fact-checked by a Pretendo developer there. It looked like our efforts would come to an end...

# Our saviour cometh

We'd given up working on the server when I got contacted by a person on Discord. [Miles](https://bsky.app/profile/milesthecreator.bsky.social), as he had introduced himself, wasn't just a random person online. He'd found our Swapdoodle file editor and the thread on Pretendo's Discord server where we asked about network dumps. To my complete amazement, Miles had *full network traffic captures* of when Swapdoodle still worked. I immediately looked into it and found **everything we were missing**. They were all features Pretendo had already implemented, I just didn't know that they were used in Swapdoodle. A few days later, we went from a half-finished server to a fully functional one. I had never been this happy about software in a *long, long* time.

This brought us to clearing the final hurdle - telling Pretendo about it and seeing what will happen. I was so anxious that we'd get rejected after all the work we did, but I couldn't have been more wrong. Jon, the lead developer of Pretendo, welcomed our efforts and helped us formally offer our server to Pretendo. At the time of writing this, the code is sitting as a [merge request](https://github.com/PretendoNetwork/swapdoodle/pull/1) and I can't wait to see what's next. This was my first ever contribution to Open Source Software, making the experience even more nerve-wrecking. However, if it's this pleasant and stress-free with other projects as well, I might just contribute to more OSS projects in the future.

# Closing words

A few days ago, Jon made [a blog post on Pretendo's website](https://pretendo.network/blog/6-2-25), going over the news in the Pretendo project over the last few months, and included our contributions in that very post! Jon, if you ever read this, thank you **so much**, it made my day. Members of the Pretendo Discord server noticed and are *excited* to hear that Swapdoodle will come back, and it's all thanks to my and Charlotte's work. It warms me in my heart to see everyone so happy, because I was in their exact position just a few months ago.

After all, that's my personal goal, as listed on my homepage - *create things that people can enjoy and find useful*.

Thank you for reading!