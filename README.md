# Requirements

## Basic
1. System must support creating SEQUENCEs which include WORKOUT plans.
1. System provides a set of pre-prepared SEQUENCEs and/or WORKOUTSs
1. User can take a SEQUENCE or WORKOUT and customise by copying and editing a current SEQUENCE or WORKOUT.
1. System must track and retain SESSIONs for user and allow historical access
1. For each SESSION, system provides easy way of tracking users progress with minimal input by user.
1. User can express a default SEQUENCE to be used by the system.
1. When a default SEQUENCE is active, the system starts from the last known stop point (including a new WORKOUT) automatically.
1. During SESSIONs, interface shall (optionally) support low vision users.
1. System shall provide optional voice prompting during SESSIONs

## Sequences

## Workouts
1. WORKOUT consists of sequence of SETs which is an 'array' of the same REP, combined with interlaced REST intervals.
1. A WORKOUT has an (optional) WARM_UP sequence.
1. A WORKOUT shall have associated meta information, including user notes.

## Warm Ups

## Sets

### Each state can be in one of the following states:-
1. NOT_PROGRAMMED: The set is not part of an active SESSION.
1. PENDING: Is part of an active SESSION, awaiting execution
1. ACTIVE: The user is executing the SET
1. COMPLETED: The user has completed the set.

### A SET has an associated result which is one of the following:
1. NULL : SET has not started
1. SUCCESS : User has completed the SET as required.
1. FAILED : The user has failed to complete the SET

### Each SET can have associated meta information regarding the exercise. These are:

1. Required duration
1. Required speed
1. Weight to be used
1. Number of repetitions to execute.
1. Equipment to use
1. Notes


[Note we may want to add Required and Actual for some of these fields for more detailed analysis. For now we leave the Actuals out ]

## Reps

## Rests

## User interface

### Sets

* For each **SET** in a **WORKOUT** we require a way for the user to see the exercise
* Each **SET** allows user to express when the set has failed or succeeded
* A user can also indicate to abandon in which case the **SET** reverts back to result NULL and the user is taken to a point where they can repeat the **SET**.

## Data Storage

## Dictionary
1. **REST** : A period of time of no activity between **REP**s or **SET**s
1. **SET** : Multiple **REP**s with associated **REST** intervals
1. **REP** : An identifiable (can be logged) single activity within a SET
1. **WORKOUT** : a session of exercise and rest in combination.
1. **SESSION** : synonym for **WORKOUT**
1. **SEQUENCE** : Multiple **SESSION**s carried out over a long period (e.g. A week)
1. **WARM_UP** : A series of exercises prior to executing a **WORKOUT** or A **SET**

---

## TODO

1. Extend the Sessions data to include personal data.
1. Load personal data from JSON
1. Extend JSON source to come from a server. Decouple so that it can be local as well.
1. Getting JSON from server is versioned to avoid overhead of calling server unnecerily
1. Define the opening screen, given realistic scenarios
   1. Users first access to system.
   1. User has selected a program and proceeds to exercise.
   1. User is half way through an unfinished workout.
1.  