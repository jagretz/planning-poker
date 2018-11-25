Planning poker, in regards to software (product) development.


# Questions

- Web app, phone app or Both?
- What is the timeline
- What is our MVP
- What technology or area do you want to focus on?



# Suggestions

- firebase for authentication and persistence
- CRA - immediate startup, sass support


# MVP

**In scope**

- Name for the app
- hosting option (discuss / research)
- temporary users
- show number of players
- ability to create a one-time unique link
  - Anyone with a link can join
  - Ability to copy & share link (open email, twitter, fb, ?)
  - max-life of link is 4 hours
- Table
  - Show cards played
  - show empty slots for cards-to-be played
  - Options
    - reset cards
    - flip cards
- Show deck



**Backlog** / leave out

- user accounts
  - Account view
- history & tracking
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



# Responsibilities

**Charles**


**Jason**



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

