**Planning Poker**, as it pertains to software (product) development.

- [Oustanding Questions](#oustanding-questions)
- [Roadmap](#roadmap)
- [Decisions](#decisions)
- [Requirements](#requirements)
- [What is Planning Poker](#what-is-planning-poker)
  - [Benefits](#benefits)
  - [Pitfallls](#pitfallls)
- [Similar Existing Projects](#similar-existing-projects)
- [Terminology](#terminology)


# Oustanding Questions

# Roadmap

Refer to [Project Board](https://github.com/jagretz/planning-poker/projects/1#column-3909961)

# Decisions

- [x] Web app, mobile app or Both?
  - Web platform. Design should focus on a mobile-first approach.
- [x] What technology or area do you want to focus on?
  - Firebase for auth, persistence, etc
  - React -- Use jagretz/R3 project boilerplate
- [x] Define MVP for initial release


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


# Similar Existing Projects

**Web Apps**
- https://play.planningpoker.com/dashboard

**Android Apps**
- Scrum Poker
- Scrum Planning


# Terminology

[Planning Poker](https://en.wikipedia.org/wiki/Planning_poker) In planning poker, members of the group make estimates by playing numbered cards face-down on the table, instead of speaking them aloud. Once everyone has played a card the cards are revealed, and the estimates are then discussed.
> By initially hiding the figures, the group can avoid cognitive bias of [anchoring](https://en.wikipedia.org/wiki/Anchoring), where the first number spoken aloud sets a precedent for subsequent estimates.

[Anchoring](https://en.wikipedia.org/wiki/Anchoring) or focalism is a cognitive bias for an individual to rely too heavily on an initial piece of information offered (known as the "anchor") when making decisions.

