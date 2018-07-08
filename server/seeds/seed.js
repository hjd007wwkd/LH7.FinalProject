
exports.seed = function(knex, Promise) {
  return knex('messages').del()
    .then(function () {
      return knex('rooms').del();
    })
    .then(function () {
      return knex('users').del();
    })
    .then(function () {
      return knex('users').insert([
        {email: 'a@a.com', username: 'Bob3452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {email: 'b@b.com', username: 'Karl4563452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {email: 'c@c.com', username: 'Sarah45345', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {email: 'd@d.com', username: 'Jrodan111', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {email: 'e@e.com', username: 'April3452', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'},
        {email: 'f@f.com', username: 'James4523', password: 0000, avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'}
      ]);
    })
    .then(function() {
      return knex('rooms').insert([
        {user_id: 1, title: "Redoine Faid: Paris helicopter prison break for gangster", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/5530/production/_102280812_33e0e9d0-8f5c-42c5-abf7-4d557e8a7333.jpg", url: "https://www.bbc.com/news/world-europe-44673753", site: "BBC News", date: "Sun, 01 Jul 2018 21:00:00 GMT", tags: ["Rédoine Faïd", "Helicopter", "Organized crime", "Prison escape", "Nicole Belloubet", "Réau", "Gonesse", "Kingdom of France"], contenthtml: `<figure> <img alt="A head and shoulders picture of Redoine Faid in a white shirt and suit" data-highest-encountered-width="660" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/5530/production/_102280812_33e0e9d0-8f5c-42c5-abf7-4d557e8a7333.jpg"></img> <figcaption>This is the second prison break pulled off by Redoine Faid (pictured in 2010)</figcaption></figure>\n<p>A notorious gangster is on the run after escaping by helicopter from a prison in the Paris region.</p>\n<p>Redoine Faid was helped by three heavily-armed men with assault rifles.</p>\n<p>Two gunmen in balaclavas used smoke bombs and angle-grinders to break into the visitors' room where Faid was talking to his brother.</p>\n<p>A third man in the prison courtyard guarded the helicopter and its pilot - a flying instructor whom the men had taken hostage.</p>\n<p>The helicopter flew to the nearby Gonesse area, where it was found by local police.</p>\n<p>Faid, 46, has been serving a 25-year sentence for a failed robbery during which a police officer was killed.</p>\n<p>This is the armed robber's second prison break: in 2013, he escaped after seizing four guards as human shields and blowing several doors off with dynamite.</p>\n<p><a href="https://www.bbc.co.uk/news/world-europe-22136482">He staged that escape less than half an hour after arriving at a prison in northern France</a>, and spent six weeks on the run.</p>\n<figure> <img alt="Investigators transport an Alouette II helicopter allegedly abandoned by French prisoner Redoine Faid and his suspected accomplices after his escape" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/A350/production/_102280814_faidhelicopter.jpg"></img> <figcaption>The escape helicopter was found in Gonesse, north of Paris</figcaption></figure>\n<figure> <img alt="This file photo taken on September 24, 2013 shows the entrance of the Sud-Francilien prison in Reau, outside Paris" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/4270/production/_102280071_3bedb945-cab7-4dc4-8896-4f209e8273a8.jpg"></img> <figcaption>Faid escaped from the Sud-Francilien prison outside Paris</figcaption></figure>\n<p>Nearly 3,000 French police have been drafted into the manhunt, a police source told AFP. &quot;Everything is being done to locate the fugitive,&quot; an interior ministry official said.</p>\n<h2>'A spectacular escape'</h2>\n<p>France's Justice Minister Nicole Belloubet, who travelled to the Sud-Francilien prison in R&eacute;au on Sunday evening, called it &quot;a spectacular escape&quot;.</p>\n<p>&quot;It was an extremely well-prepared commando unit that may have used drones to survey the area beforehand,&quot; she said.</p>\n<p>The prison courtyard where the helicopter landed was the only area not protected by anti-aircraft netting. Prison union representative Martial Delabroye said that was because inmates do not use it, &quot;except to leave the prison&quot;.</p>\n<p>Nobody was injured during the jailbreak, which happened at around 11:20 (09:20 GMT) on Sunday.</p>\n<p>The captured pilot was released, and later taken to hospital suffering from shock.</p>\n<p>Faid's accomplices had taken the flying instructor hostage at a small flying club in Fontenay-Tr&eacute;signy, where he was waiting for a student, and ordered him to fly to the prison.</p>\n<figure> <img alt="Map of key locations in the prison break" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/15C96/production/_102283298_gangster.png"></img> </figure>\n<p>Faid initially got out of the helicopter and into a black Renault Megane which was seen heading for the A1 motorway. That getaway car was later found burnt out at a shopping centre car park in Aulnay-sous-Bois, a Paris suburb.</p>\n<p>Early on Sunday afternoon, the fugitive was said to have swapped to a white van.</p>\n<h2>Gangster inspired by Hollywood crime</h2>\n<p>Born in 1972, Faid grew up in a notoriously rough part of Paris.</p>\n<p>In the 1990s, he ran a gang involved in armed robbery and extortion in the French capital. He has said his lifestyle was inspired by Hollywood gangster films, including the Al Pacino thriller Scarface.</p>\n<p>He is devoted to US director Michael Mann's stylised crime thrillers, especially 1995 gangster film Heat.</p>\n<p>He once approached Mann at a Paris film festival and told him: &quot;You were my technical adviser.&quot;</p>\n<p>Faid claimed to have watched the film dozens of times to hone his skills as a bank robber.</p>\n<figure> <img alt="A forensic police officer crouches by a car abandoned by Redoine Faid at O'Parinor shopping mall car park" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/27FE/production/_102283201_renault.jpg"></img> <figcaption>Forensic police investigate the black car abandoned by Redoine Faid at a shopping centre car park</figcaption></figure>\n<p>In 2009, Faid wrote a book about his experiences of growing up in Paris's crime-ridden suburbs and graduating into a life of law-breaking.</p>\n<p>He claimed to have turned his back on criminality, but a year later was involved in the failed robbery which earned him a prison stretch in R&eacute;au, in the Seine-et-Marne region.</p>\n<p>French police have nicknamed the gangster &quot;L'&Eacute;crivain&quot; - &quot;the writer&quot; - in a nod to his autobiography and subsequent media tour.</p>\n<p>One of Faid's most recent prison supervisors said he was never in conflict with guards, but that &quot;we must always be wary&quot;.</p>\n<p>&quot;In the corner of his mind, he never lost the idea of escaping. Behind all his manners - he is very polite - he always hid his game,&quot; the supervisor said.</p>\n<figure> <img alt="Presentational grey line" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/C50B/production/_101534405_presentational_grey_line464-nc.png"></img> </figure>\n<h2>Timeline of a jailbreaker</h2>\n<ul><li>Faid's cycle of imprisonment and escape began with his arrest in 1998 on multiple counts of armed robbery and bank theft. </li></ul>\n<ul><li>In 2009 he was freed on parole, swearing that he was a changed man - but by 2011, he had breached his terms of release and was back behind bars.</li></ul>\n<ul> <li>In 2017, Faid was sentenced to 10 years' imprisonment for his 2013 jailbreak from S&eacute;quedin prison, outside Lille. He was also given 18 years for masterminding a 2010 robbery in which a young policewoman, Aur&eacute;lie Fouquet, was killed.</li> <li>Faid mounted a failed appeal, and in April 2018 was given a heavier sentence of 25 years for the botched robbery. He was serving that term at the time of his latest escape.</li> </ul>\n<figure> <img alt="Presentational grey line" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/C50B/production/_101534405_presentational_grey_line464-nc.png"></img> </figure>\n<p>The fugitive is not the first to escape a French jail by helicopter.</p>\n<p><a href="http://news.bbc.co.uk/2/hi/europe/1240396.stm">In 2001, three armed robbers fled a prison in Draguignan, southern France</a>, after an accomplice hijacked a helicopter from an airfield in nearby St Tropez.</p>\n<p><a href="http://news.bbc.co.uk/2/hi/europe/2949763.stm">Two years later, inmates accused of running an international drugs ring escaped a remand centre near Aix-en-Provence</a> by similar means.</p>\n<figure> <img alt="This file photo taken on 15 April 2013 in Paris shows a screenshot of the Interpol website shows the international wanted person notice for French robber Redoine Faid." data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/17708/production/_102280069_4608fe91-332a-4d24-b897-257e21db525f.jpg"></img> <figcaption>Redoine Faid was placed on Interpol's most-wanted list after his 2013 escape</figcaption></figure>\n<figure> <img alt="map" data-highest-encountered-width="624" src="https://ichef.bbci.co.uk/news/624/cpsprodpb/07CD/production/_102279910_71c8d77b-0230-4a49-b0bd-7b561a1f2ac4.jpg"></img> </figure>`, contenttext: `A notorious gangster is on the run after escaping by helicopter from a prison in the Paris region.\nRedoine Faid was helped by three heavily-armed men with assault rifles.\nTwo gunmen in balaclavas used smoke bombs and angle-grinders to break into the visitors' room where Faid was talking to his brother.\nA third man in the prison courtyard guarded the helicopter and its pilot - a flying instructor whom the men had taken hostage.\nThe helicopter flew to the nearby Gonesse area, where it was found by local police.\nFaid, 46, has been serving a 25-year sentence for a failed robbery during which a police officer was killed.\nThis is the armed robber's second prison break: in 2013, he escaped after seizing four guards as human shields and blowing several doors off with dynamite.\nHe staged that escape less than half an hour after arriving at a prison in northern France, and spent six weeks on the run.\nNearly 3,000 French police have been drafted into the manhunt, a police source told AFP. "Everything is being done to locate the fugitive," an interior ministry official said.\n'A spectacular escape'\nFrance's Justice Minister Nicole Belloubet, who travelled to the Sud-Francilien prison in Réau on Sunday evening, called it "a spectacular escape".\n"It was an extremely well-prepared commando unit that may have used drones to survey the area beforehand," she said.\nThe prison courtyard where the helicopter landed was the only area not protected by anti-aircraft netting. Prison union representative Martial Delabroye said that was because inmates do not use it, "except to leave the prison".\nNobody was injured during the jailbreak, which happened at around 11:20 (09:20 GMT) on Sunday.\nThe captured pilot was released, and later taken to hospital suffering from shock.\nFaid's accomplices had taken the flying instructor hostage at a small flying club in Fontenay-Trésigny, where he was waiting for a student, and ordered him to fly to the prison.\nFaid initially got out of the helicopter and into a black Renault Megane which was seen heading for the A1 motorway. That getaway car was later found burnt out at a shopping centre car park in Aulnay-sous-Bois, a Paris suburb.\nEarly on Sunday afternoon, the fugitive was said to have swapped to a white van.\nGangster inspired by Hollywood crime\nBorn in 1972, Faid grew up in a notoriously rough part of Paris.\nIn the 1990s, he ran a gang involved in armed robbery and extortion in the French capital. He has said his lifestyle was inspired by Hollywood gangster films, including the Al Pacino thriller Scarface.\nHe is devoted to US director Michael Mann's stylised crime thrillers, especially 1995 gangster film Heat.\nHe once approached Mann at a Paris film festival and told him: "You were my technical adviser."\nFaid claimed to have watched the film dozens of times to hone his skills as a bank robber.\nIn 2009, Faid wrote a book about his experiences of growing up in Paris's crime-ridden suburbs and graduating into a life of law-breaking.\nHe claimed to have turned his back on criminality, but a year later was involved in the failed robbery which earned him a prison stretch in Réau, in the Seine-et-Marne region.\nFrench police have nicknamed the gangster "L'Écrivain" - "the writer" - in a nod to his autobiography and subsequent media tour.\nOne of Faid's most recent prison supervisors said he was never in conflict with guards, but that "we must always be wary".\n"In the corner of his mind, he never lost the idea of escaping. Behind all his manners - he is very polite - he always hid his game," the supervisor said.\nTimeline of a jailbreaker\nFaid's cycle of imprisonment and escape began with his arrest in 1998 on multiple counts of armed robbery and bank theft.\nIn 2009 he was freed on parole, swearing that he was a changed man - but by 2011, he had breached his terms of release and was back behind bars.\nIn 2017, Faid was sentenced to 10 years' imprisonment for his 2013 jailbreak from Séquedin prison, outside Lille. He was also given 18 years for masterminding a 2010 robbery in which a young policewoman, Aurélie Fouquet, was killed.\nFaid mounted a failed appeal, and in April 2018 was given a heavier sentence of 25 years for the botched robbery. He was serving that term at the time of his latest escape.\nThe fugitive is not the first to escape a French jail by helicopter.\nIn 2001, three armed robbers fled a prison in Draguignan, southern France, after an accomplice hijacked a helicopter from an airfield in nearby St Tropez.\nTwo years later, inmates accused of running an international drugs ring escaped a remand centre near Aix-en-Provence by similar means.`},
        {user_id: 1, title: "California father's killing at campsite leads to investigations into 7 past shootings", image: "https://cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-exlarge-169.jpg", url: "https://www.cnn.com/2018/06/30/us/father-killed-camping-california/index.html", site: "CNN", date: "Sat, 30 Jun 2018 00:00:00 GMT", tags: ["Father", "United States", "Campsite", "Malibu Creek State Park", "Camping", "Death", "Shooting"], contenthtml: `<figure><img alt="Dad shot in tent while camping with daughters" src="https://cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-exlarge-169.jpg"></img><figcaption>Dad shot in tent while camping with daughters 01:36</figcaption></figure>\n<p>(CNN)Authorities are looking into whether the death of a man who was shot while camping with his daughters in California is linked to previous shootings at the campsite.</p>\n<p>Tristan Beaudette was <a href="https://www.cnn.com/2018/06/28/us/father-killed-camping-shot-in-head/index.html">shot once in the head</a> on June 22 as he slept in a tent with his 2- and 4-year-old daughters at the Malibu Creek State Park, officials said.</p>\n<p>In a statement, the Los Angeles County Sheriff's Department said it's looking for links between the 35-year-old's killing and seven shootings dating to November 2016.</p>\n<p>Detectives have not determined a motive behind the shooting and currently there's no evidence that suggest all the incidents are connected, the statement said.</p>\n<figure><a href="https://www.cnn.com/2018/06/28/us/father-killed-camping-shot-in-head/index.html"><img alt="The dad killed while camping with his 2 daughters was shot once in the head, coroner says" data-demand-load="loaded" data-eq-pts="mini: 0,  xsmall: 221,  small: 308,  medium: 461,  large:  781" data-eq-state="mini xsmall" data-src-full16x9="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-full-169.jpg" data-src-large="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-super-169.jpg" data-src-medium="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-exlarge-169.jpg" data-src-mini="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-small-169.jpg" data-src-mini1x1="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-small-11.jpg" data-src-small="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-large-169.jpg" data-src-xsmall="//cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-medium-plus-169.jpg" src="https://cdn.cnn.com/cnnnext/dam/assets/180625140856-01-tristan-beaudette-medium-plus-169.jpg"></img></a></figure>\n<p>The shootings detectives are investigating took place on November 3 and 9, 2016; Jan. 7, June 6, July 22, July 30, 2017 and most recently on June 18.</p>\n<p>Incidents include a man shot in the 8,000-acre park in 2016, and a woman whose car was hit by a bullet while she was camping there with her boyfriend in January 2017, CNN affiliate <a href="http://abc7.com/previous-shootings-reported-at-calabasas-park-where-father-killed/3648349/">KABC</a> reported. It's unclear whether the shootings resulted in fatalities.</p>\n<p>Earlier this week, the sheriff's department had said they were only reviewing three prior shooting incidents.</p>\n<p>The Malibu Creek State Park is scenic recreation area 25 miles from downtown Los Angeles that's been used as a backdrop for movies and television shows.</p>\n<figure><img alt="Tristan Beaudette was camping with his two daughters at a state park in Southern California." data-demand-load="loaded" data-eq-pts="mini: 0,  xsmall: 221,  small: 308,  medium: 461,  large:  781" data-eq-state="mini xsmall small medium" data-src-full16x9="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-full-169.jpg" data-src-large="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-super-169.jpg" data-src-medium="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-exlarge-169.jpg" data-src-mini="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-small-169.jpg" data-src-mini1x1="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-small-11.jpg" data-src-small="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-large-169.jpg" data-src-xsmall="//cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-medium-plus-169.jpg" src="https://cdn.cnn.com/cnnnext/dam/assets/180625141002-01-malibu-creek-state-park-murder-exlarge-169.jpg"></img></figure>\n<p>Beaudette loved watching his daughters sing on stage, said Rabbi Arnie Rachlis of the University Synagogue in Irvine.</p>\n<p>&quot;We would see the family at many of the University Synagogue events,&quot; Rachlis said. &quot;Tristan was such a warm human being with this tremendous smile. You would see his little girls on stage, performing or singing. And he was riveted to them, adored them, looking at them with a big smile.&quot;</p>\n<p>Beaudette took the girls camping while his wife was studying for an exam, the rabbi told CNN. Beaudette was &quot;so comfortable in nature and as a parent, ... it was natural that he would take them on the trip.&quot;</p>\n<p>He was an associate director at the pharmaceutical company Allergan, according to his LinkedIn page. The online bio also says Beaudette had seven years experience in late-stage pharmaceutical drug-product development.</p>\n<p>&quot;Tristan will be remembered as a talented scientist who was admired by all who knew him and a meaningful contributor to our company's research and development efforts,&quot; Allergan said in a statement.</p>`, contenttext: `(CNN)Authorities are looking into whether the death of a man who was shot while camping with his daughters in California is linked to previous shootings at the campsite.\nTristan Beaudette was shot once in the head on June 22 as he slept in a tent with his 2- and 4-year-old daughters at the Malibu Creek State Park, officials said.\nIn a statement, the Los Angeles County Sheriff's Department said it's looking for links between the 35-year-old's killing and seven shootings dating to November 2016.\nDetectives have not determined a motive behind the shooting and currently there's no evidence that suggest all the incidents are connected, the statement said.\nThe shootings detectives are investigating took place on November 3 and 9, 2016; Jan. 7, June 6, July 22, July 30, 2017 and most recently on June 18.\nIncidents include a man shot in the 8,000-acre park in 2016, and a woman whose car was hit by a bullet while she was camping there with her boyfriend in January 2017, CNN affiliate KABC reported. It's unclear whether the shootings resulted in fatalities.\nEarlier this week, the sheriff's department had said they were only reviewing three prior shooting incidents.\nThe Malibu Creek State Park is scenic recreation area 25 miles from downtown Los Angeles that's been used as a backdrop for movies and television shows.\nBeaudette loved watching his daughters sing on stage, said Rabbi Arnie Rachlis of the University Synagogue in Irvine.\n"We would see the family at many of the University Synagogue events," Rachlis said. "Tristan was such a warm human being with this tremendous smile. You would see his little girls on stage, performing or singing. And he was riveted to them, adored them, looking at them with a big smile."\nBeaudette took the girls camping while his wife was studying for an exam, the rabbi told CNN. Beaudette was "so comfortable in nature and as a parent, ... it was natural that he would take them on the trip."\nHe was an associate director at the pharmaceutical company Allergan, according to his LinkedIn page. The online bio also says Beaudette had seven years experience in late-stage pharmaceutical drug-product development.\n"Tristan will be remembered as a talented scientist who was admired by all who knew him and a meaningful contributor to our company's research and development efforts," Allergan said in a statement.`},
        {user_id: 1, title: "Ketchup wars: Heinz defends its image as tariffs kick in on U.S.-made condiment", image: "https://i.cbc.ca/1.3202362.1530310464!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/heinz-ketchup.jpg", url: "http://www.cbc.ca/news/business/heinz-french-s-ketchup-trade-war-tariffs-1.4728691", site: "CBC", date: "Sun, 01 Jul 2018 04:00:00 GMT", tags: ["Av Maharaj", "Condiment", "Image", "Tariff", "Heinz", "Kraft Heinz", "Tax", "Ketchup", "Canada", "United States"], contenthtml: `<figure><img alt="" src="https://i.cbc.ca/1.3202362.1530310464!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/heinz-ketchup.jpg"></img></figure>\n<p>Kraft Heinz will get hit with a 10 per cent tariff for items it makes in the U.S. and imports to Canada, including ketchup. (Oli Scarff/Getty Images)</p>\n<p>Faced with a 10 per cent tariff on its ketchup and other goods, American food company, Kraft Heinz is opening a new front in Canada's ketchup wars.</p>\n<p>Heinz took a public relations beating after moving its ketchup production to the U.S. in 2014, enabling Canadian-made French's ketchup to steal the spotlight. Now the company, which merged with Kraft in 2015, has begun its own PR campaign to highlight its Canadian connections, including the products it still makes in this country.</p>\n<p>&quot;We are a good corporate citizen, and truly part of the Canadian fabric,&quot; said Av Maharaj, vice president of corporate affairs for Kraft Heinz Canada, shortly before the tariffs took effect on July 1.</p>\n<figure><img alt="" src="https://i.cbc.ca/1.4729511.1530312088!/fileImage/httpImage/image.JPG_gen/derivatives/original_780/french-s-heinz.JPG"></img><figcaption>U.S.-made Heinz ketchup imports will be hit with a 10 per cent tariff, but French's product won't because it's made in Canada. (CBC)</figcaption></figure>\n<p>&quot;The tariffs are just making things worse for them and that's why they're reacting,&quot; says food industry expert Sylvain Charlebois. However, he believes Kraft Heinz will garner little sympathy as Canada gets embroiled in a trade war with its neighbour.</p>\n<p>&quot;It's all about politics &mdash; politics are trumping economics,&quot; said Charlebois, a professor in food distribution and policy at Dalhousie University in Halifax.</p>\n<h2>Tariff tit for tat</h2>\n<p>In response to the U.S. imposing tariffs on Canadian steel and aluminum, Ottawa has levied a 10 per cent tariff on <a href="https://www.fin.gc.ca/access/tt-it/cacsap-cmpcaa-1-eng.asp">many U.S. consumer imports</a> &mdash; including ketchup and other products such as coffee and sauces that Kraft Heinz makes south of the border.</p>\n<p>The company argues the tariffs it faces are unwarranted because it produces many other items in Canada, such as cheese and peanut butter, plus it employs more than 2,000 workers in this country</p>\n<p>&quot;We don't think the tariffs imposed by Mr. Trump on Canada were particularly fair to Canada, and neither do we think the reciprocal tariffs that were imposed are equally fair,&quot; said Maharaj.</p>\n<figure><img alt="" src="https://i.cbc.ca/1.4709456.1530317122!/cpImage/httpImage/image.jpg_gen/derivatives/original_780/canada-us-still-best-friends.jpg"></img><figcaption>Justin Trudeau's Liberal government is imposing $16.6-billion worth of retaliatory tariffs on U.S. products, including many consumer goods. (Evan Vucci/The Associated Press)</figcaption></figure>\n<p>To add insult to injury, on Canada Day, Justin Trudeau is scheduled to visit a production plant in Leamington, Ont., that Heinz vacated in 2014. At the time, it laid off 740 workers and threatened the market for local tomato growers by moving its ketchup operations to the U.S.</p>\n<p>U.S.-based brand French's benefited, sourcing Leamington-grown tomatoes and eventually <a href="https://www.cbc.ca/news/business/french-s-ketchup-canada-1.4104656">setting up production</a> at a Toronto plant to make homegrown ketchup. The move <a href="http://www.cbc.ca/news/business/frenchs-ketchup-canadiana-1.3491952">won the hearts</a> of many Canadians while Heinz was seen as the bad guy who skipped town.</p>\n<p>Kraft Heinz is now trying to change that image of abandoning the region. &quot;There's some miscommunication out in the media that we left Leamington. We never really did,&quot; said Maharaj.</p>\n<p>He says after Heinz sold the plant to Highbury Canco, it negotiated deals with the company to produce many of its products for the Canadian market, including canned beans and tomato juice.</p>\n<p>&quot;We have been a great partner with them.&quot;</p>\n<h2>Declining sales</h2>\n<p>Food industry expert, Charlebois says it's a little late in the game for Kraft Heinz to try to put a positive spin on selling the Leamington plant. He suspects the company is speaking out now because it has reached a breaking point. &quot;It feels like an 'enough is enough' kind of campaign.&quot;</p>\n<p>He has been tracking Kraft Heinz's PR battle in Canada, and says the company contacted him this week for advice on how to control its image.</p>\n<p>&quot;If you're doing that, you've got be concerned.&quot;</p>\n<p>Heinz has good reason for concern &mdash; after rival French's ketchup stole the spotlight for sourcing Leamington tomatoes, the lesser-known brand has seen a big boost in sales.</p>\n<figure><img alt="" src="https://i.cbc.ca/1.4105071.1530311368!/fileImage/httpImage/image.JPG_gen/derivatives/original_780/brooke-gilliford-french-s.JPG"></img><figcaption>French's Canadian regional manager, Brooke Gilliford, shows off its plant set up last year in North York, Ont., to produce homegrown ketchup. (Jacqueline Hansen/CBC)</figcaption></figure>\n<p>According to market research company, Euromonitor International, from 2016 to 2017, French's Canadian ketchup sales more than doubled to $11.1 million while Heinz's fell by five per cent to $126.4 million.</p>\n<p>Canadian tariffs targeting U.S.-made goods will also affect the bottom line for Kraft Heinz.</p>\n<p>&quot;It's going to be millions and millions of dollars in tariffs, and so that's a difficult thing for any organization to absorb,&quot; said Maharaj.</p>\n<p>Regardless, chances are it won't be enough to convince the Canadian government to remove items such as ketchup from its hit list.</p>\n<figure><img alt="" src="https://i.cbc.ca/1.4729437.1530372265!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/beth-mouratidis-barrie-ont-buycanada.jpg"></img><figcaption>Beth Mouratidis in Barrie, Ont., is aiming to buy only Canadian-made products. (submitted by Beth Mouratidis)</figcaption></figure>\n<p>Kraft Heinz's messaging may also fail to resonate with Canadians now boycotting U.S.-made products as part of a brewing <a href="https://www.cbc.ca/news/business/buy-american-canada-1.4718355">buy-Canadian campaign</a> to protest U.S.-imposed tariffs.</p>\n<p>Beth Mouratidis refuses to buy Heinz ketchup, among other U.S. goods, but the Barrie, Ont., resident says it's nothing personal against the company.</p>\n<p>Instead, she says she's taking a stand to send a message to the U.S. to drop tariffs on Canadian products.</p>\n<p>&quot;If enough people jump on the bandwagon, American businesses will suffer somewhat,&quot; she said.</p>\n<p>&quot;That's the only way they will put pressure on their government to say, 'Hey, we're hurting, you need to stop this.'&quot;</p>\n<figure><img alt="" src="https://i.cbc.ca/1.4729814.1530372361!/fileImage/httpImage/image.png_gen/derivatives/original_780/republican-sen-patrick-toomey-of-pennsylvania.png"></img><figcaption>Sen. Patrick Toomey of Pennsylvania says Kraft Heinz could fix its tariff problems by moving production back to Canada. (YouTube)</figcaption></figure>\n<p><a href="https://www.youtube.com/watch?v=GNBzmlO_GCQ&feature=youtu.be">Last week at a Senate hearing</a>, Republican Sen. Patrick Toomey of Pennsylvania, where Kraft Heinz is partly based, expressed concern over how the ketchup tariffs will hurt the company. He also offered a suggestion how it could fix its woes.</p>\n<p>&quot;The solution for them to be able to continue to sell their product in Canada would be to shut down their U.S. factory and move to Canada,&quot; he said.</p>\n<p>Sophia Harris has worked as a CBC video journalist across the country, covering everything from the start of the annual lobster fishery in Yarmouth, N.S., to farming in Saskatchewan. She now has found a good home at the business unit in Toronto. Contact: sophia.harris@cbc.ca</p>`, contenttext: `Kraft Heinz will get hit with a 10 per cent tariff for items it makes in the U.S. and imports to Canada, including ketchup. (Oli Scarff/Getty Images)\nFaced with a 10 per cent tariff on its ketchup and other goods, American food company, Kraft Heinz is opening a new front in Canada's ketchup wars.\nHeinz took a public relations beating after moving its ketchup production to the U.S. in 2014, enabling Canadian-made French's ketchup to steal the spotlight. Now the company, which merged with Kraft in 2015, has begun its own PR campaign to highlight its Canadian connections, including the products it still makes in this country.\n"We are a good corporate citizen, and truly part of the Canadian fabric," said Av Maharaj, vice president of corporate affairs for Kraft Heinz Canada, shortly before the tariffs took effect on July 1.\n"The tariffs are just making things worse for them and that's why they're reacting," says food industry expert Sylvain Charlebois. However, he believes Kraft Heinz will garner little sympathy as Canada gets embroiled in a trade war with its neighbour.\n"It's all about politics — politics are trumping economics," said Charlebois, a professor in food distribution and policy at Dalhousie University in Halifax.\nTariff tit for tat\nIn response to the U.S. imposing tariffs on Canadian steel and aluminum, Ottawa has levied a 10 per cent tariff on many U.S. consumer imports — including ketchup and other products such as coffee and sauces that Kraft Heinz makes south of the border.\nThe company argues the tariffs it faces are unwarranted because it produces many other items in Canada, such as cheese and peanut butter, plus it employs more than 2,000 workers in this country\n"We don't think the tariffs imposed by Mr. Trump on Canada were particularly fair to Canada, and neither do we think the reciprocal tariffs that were imposed are equally fair," said Maharaj.\nTo add insult to injury, on Canada Day, Justin Trudeau is scheduled to visit a production plant in Leamington, Ont., that Heinz vacated in 2014. At the time, it laid off 740 workers and threatened the market for local tomato growers by moving its ketchup operations to the U.S.\nU.S.-based brand French's benefited, sourcing Leamington-grown tomatoes and eventually setting up production at a Toronto plant to make homegrown ketchup. The move won the hearts of many Canadians while Heinz was seen as the bad guy who skipped town.\nKraft Heinz is now trying to change that image of abandoning the region. "There's some miscommunication out in the media that we left Leamington. We never really did," said Maharaj.\nHe says after Heinz sold the plant to Highbury Canco, it negotiated deals with the company to produce many of its products for the Canadian market, including canned beans and tomato juice.\n"We have been a great partner with them."\nDeclining sales\nFood industry expert, Charlebois says it's a little late in the game for Kraft Heinz to try to put a positive spin on selling the Leamington plant. He suspects the company is speaking out now because it has reached a breaking point. "It feels like an 'enough is enough' kind of campaign."\nHe has been tracking Kraft Heinz's PR battle in Canada, and says the company contacted him this week for advice on how to control its image.\n"If you're doing that, you've got be concerned."\nHeinz has good reason for concern — after rival French's ketchup stole the spotlight for sourcing Leamington tomatoes, the lesser-known brand has seen a big boost in sales.\nAccording to market research company, Euromonitor International, from 2016 to 2017, French's Canadian ketchup sales more than doubled to $11.1 million while Heinz's fell by five per cent to $126.4 million.\nCanadian tariffs targeting U.S.-made goods will also affect the bottom line for Kraft Heinz.\n"It's going to be millions and millions of dollars in tariffs, and so that's a difficult thing for any organization to absorb," said Maharaj.\nRegardless, chances are it won't be enough to convince the Canadian government to remove items such as ketchup from its hit list.\nKraft Heinz's messaging may also fail to resonate with Canadians now boycotting U.S.-made products as part of a brewing buy-Canadian campaign to protest U.S.-imposed tariffs.\nBeth Mouratidis refuses to buy Heinz ketchup, among other U.S. goods, but the Barrie, Ont., resident says it's nothing personal against the company.\nInstead, she says she's taking a stand to send a message to the U.S. to drop tariffs on Canadian products.\n"If enough people jump on the bandwagon, American businesses will suffer somewhat," she said.\n"That's the only way they will put pressure on their government to say, 'Hey, we're hurting, you need to stop this.'"\nLast week at a Senate hearing, Republican Sen. Patrick Toomey of Pennsylvania, where Kraft Heinz is partly based, expressed concern over how the ketchup tariffs will hurt the company. He also offered a suggestion how it could fix its woes.\n"The solution for them to be able to continue to sell their product in Canada would be to shut down their U.S. factory and move to Canada," he said.\nSophia Harris has worked as a CBC video journalist across the country, covering everything from the start of the annual lobster fishery in Yarmouth, N.S., to farming in Saskatchewan. She now has found a good home at the business unit in Toronto. Contact: sophia.harris@cbc.ca`}
      ]);
    })
};
