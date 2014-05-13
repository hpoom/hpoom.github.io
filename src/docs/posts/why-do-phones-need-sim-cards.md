---
layout: post
title: Why do phones need sim cards?
snippet: The big question I keep thinking over and over in my head, is why do we still use sims? Has technology not moved far enough forward to provide us with a better solution to this problem?
author: { name: Simon Wood, email: hpoomdev@gmail.com }
path: /posts/why-do-phones-need-sim-cards.html
type: post
isPinned: true
tags: ['phones', 'sim', 'solution']
created: '2014-05-12T21:08:24+00:00'
---

Your new phone has arrived and now your trying to figure out how to get the back cover off or open a tiny tray in order to put your [sim card](http://en.wikipedia.org/wiki/Sim_card) into it. Or maybe your screaming out loud because you have a micro sim in your hand but your new phone takes a nano sim.

The big question I keep thinking over and over in my head, is why do we still use sims? Has technology not moved far enough forward to provide us with a better solution to this problem?

In order to propose a solution to the sim issue first we needed to look into what the sim does. Before we get too far I should state I am neither a telecoms expert or a hardware expert. I am just a phone user that has made an observation as to how crazy things are now, and wonders why has technology not fixed this yet.

There are two mobile phone standards [GSM](http://en.wikipedia.org/wiki/GSM) and [CDMA](http://en.wikipedia.org/wiki/CDMA). It is only GSM that uses sim cards, but CDMA is not the solution as it has it’s own issues. GSM is widely used by the whole world, where as CDMA is limited to just the US. Also CDMA limits the use of handsets on the network which prevents you from using second hand hardware or moving hardware from one network to another. Networks that support CDMA are also introducing sim cards to allow for 4G which requires sim authentication.

The key functions of the sim card in the GSM setup is to authenticate the user to the network. In simple terms the sim card identifies itself to the network and the network checks in a database to see if the card is authorised to use the services on the network and which account to charge the services too. In the old days sims were also used to store address book and SMS messages, but that is not the case with smartphones which use internal memory or cloud storage to store this data. On a modern smart phone the address book is synced from cloud by a Google or Apple login.

So why can’t we move to a login to replace the sim? Even if the infrastructure can not be changed and expects a sim, new phones could come with a writeable sim embedded in them instead of a removable sim slot. We could then authenticate with our phone network using a login similar to a Google or Apple login. One might even suggest OAuth 2.0 could be the solution here. Once authenticated with our network we could send our phone the details of our sim and these could be stored on the embedded inbuilt sim for future use. The only problem I envisage here is that this would have to be done over wifi when you first setup your phone. This would be an issue because you would not be able to connect to your networks masts until the embedded inbuilt sim has been updated. In the case where the user does not have wifi and an internet connection themselves this could be solved by them being setup in a shop run by their network where they would have wifi and an internet connection.

The benefits I see to this are that users would not have to worry about the different sim sizes currently in use. Phone manufactures would find it easier to build water and dust proof phones as we would not need access to insert a sim anymore. Customers could switch between devices easier use multiple accounts/sims on one device. No more need for a dual sim phones if you want to have a separate work and personal phone number but only one phone. You could register two accounts on one hardware and have phone options to enable and disable the sims. Customers would also move away from devices being locked to one network. All devices would effectively be "sim free”, although the networks might not like this. One final thought if your device was stolen you could remote wipe the sim just like how you can remote lock an Android phone if it is stolen.

So is this a crazy idea? Could this work? Or would the networks not support this move and prevent innovation of an outdated sim model?