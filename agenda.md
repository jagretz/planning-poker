Planning poker, in regards to software (product) development.


# Questions

- [x] Web app, phone app or Both?
  - Web platform
- [] What technology or area do you want to focus on?
  - Firebase for auth, persistence, etc
  - react
- [x] What is our MVP
- What is the timeline. Refer to MVP



# Suggestions

- firebase for authentication and persistence
- CRA - immediate startup, sass support


# Responsibilities / Action Items

Design / UX


**Charles**

- [ ] Spend reading on react

**Jason**

- [x] Give Charles rights to github project
- [ ] Create project on github
- [ ] Next week
- [ ] Setup starter app

# MVP

**In scope**

- Name for the app - "Planning Poker"
- Sessions
  - ability to create temporary sessions
  - ability to join temporary sessions
  - ability to create a one-time unique link
    - Show link / room name
- show name/number of players in game
  - Anyone with a link can join
- Table (UX)
  - Show cards played
  - show empty slots for cards-to-be played
- Show deck (UX)
- Player role
    - Allowed to vote
    - Allowed to reset cards
    - Allowed to reveal votes


**Backlog** / leave out
**top 3 highest priority**
- _(core feature)_ Moderator Options - Moderators are core to the functionality to the app.
  - Allowed to vote
  - reset cards
  - flip cards
- Occasional clean up of old games
    - max-life of link is 4 hours
- Ability to copy session link
----
- Show number of invited players
- hosting option (discuss / research)
  - github pages, netlify (CI/CD), gitlab
- CI/CD
  - netlify, gitlab, jenkins
- Ability to share session link (open email, twitter, fb, ?)
- Moderator voting can be optional
- anonymous voting per round
    - mask user names for voting
    - when outliers occur, people just speak their piece/
      reveal themselves
- Auto detection of outliers
    - Indicate outlier cards
    - (if anonymized voting) Reveal identities of outliers
    - Need to determine outlier conditions
- user accounts
  - Account view
- history & tracking
- Analytics
- time & timers
  - clock
  - countdown
  - countup (stopwatch)
  - time associated / timer for each task. Calculation of (time available / number of tasks to estimate) = time to estimate each task.
- Decks
  - customized decks
  - deck values
  - Option for different decks, ie fibonocci, freeform, double, emoji, etc
  - colorized decks
  - ability to create your own deck (account required)
- spectator option
- option to poke team if taking too long to estimate
- Other views (printing)
- add storys' / tasks' / task view (list)
- display users
  - names, avatars, etc
  - active & inactive players
  - invited but not yet joined
- Voice
- Chat
- Camera




# Example Apps

Web
- https://play.planningpoker.com/dashboard

Android
- Scrum Poker
- Scrum Planning


# Requirements

Timer for estimation
- generate a time given number of tasks & time available
- repeat estimations times are cut in half
Cards (points or numbers) - many different progressions are used. Most common is the fibonacci sequence; 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?/∞, ☕️
Timer for soapbox discussions
Identitys'
- Allow anonymous
- generate uuid's, avatars, or fake names (think halo 1)
Estimates
- Save past estimates & time (for same task)
- Save history of estimates and time. This can be useful for attachted / associated / tagged tasks.


# What is Planning Poker

The overall process, Reason (the why), procedure, and required resources can be found on [wiki](https://en.wikipedia.org/wiki/Planning_poker)

**tl;dr** estimating effort or relative size of tasks. Tasks are smaller peices of fuctionality, or business value, that have been broken down from the overall completed product or MVP.


## Benefits

- Fun / enjoyable due to it's game-like format
- keeps the meeting focused and moving along at a reasonable pace. Helps to deter off-topic distractions / discussions; aversions from the intent of the meeting.
- Leverage knowledge from entire team
- Pooling insights from all areas of development and expertise


## Pitfallls

> "convergence to consensus estimate" - [Agile Aliance](https://www.agilealliance.org/glossary/poker/)


# Terminology

[Planning Poker](https://en.wikipedia.org/wiki/Planning_poker) In planning poker, members of the group make estimates by playing numbered cards face-down on the table, instead of speaking them aloud. Once everyone has played a card the cards are revealed, and the estimates are then discussed.
> By initially hiding the figures, the group can avoid cognitive bias of [anchoring](https://en.wikipedia.org/wiki/Anchoring), where the first number spoken aloud sets a precedent for subsequent estimates.

[Anchoring](https://en.wikipedia.org/wiki/Anchoring) or focalism is a cognitive bias for an individual to rely too heavily on an initial piece of information offered (known as the "anchor") when making decisions.

