## robot cleaner

this is a project in typescript to describe a software prototype robot cleaner that moves around a space cleaning

### setup

`npm i` will install the required packages

`npm start` will start the app

`npm test` will run tests (jest)


### input 

 - enter in command line (stdin)

 - first input line: single integer 0-10000 representing number of commands the robot should be expected to execute before it is finished 

 - second input line: two numbers (-100000 - 100000) representing starting x,y coords of the robot 

 - third (and further) input lines: uppercase letter (N, S, E, W) direction, followed by number of steps (0- 100000) robot should take

### notes

 - robot never leaves defined area
 - no validation on input
 - no error messages output
 - no whitespace on output
  

### output

number of unique places in the grid that were cleaned prefixed by `=> Cleaned: `

### example input:

```
2
10 22
E 2
N 1
```

### example output 

```
=> Cleaned: 4
```
