# Coder Challenge

## What the challenge is
- Open a websocket utlizing [This websocket library](https://github.com/joewalnes/websocketd) through a bash session.
- In that bash session, execute a script to output 10kb of random data.
- With that data, draw a 800x100 canvas with each pixel representing a single bit.
- For every bit with a value of 1, draw the pixel black, otherwise, draw it white.

## Instructions on how to use
- Clone this repository
- Install [This websocket library](https://github.com/joewalnes/websocketd) via homebrew
```bash
brew install websocketd
```
- Once the websocketd is installed, run the bash script via websocketd.
```bash
websocketd --port=8080 ./start.sh
```
- If you for some reason have a "permission denied" error, change the file permissions for the "start.sh" file.
(It should be fine as is, but just in case)
```bash
chmod +x start.sh
```
- At this point, you should have the socket open and running.
- While you are in the root of the project directory, start up an http server or run a livereload server on the index.html file from your IDE.
```bash
python -m SimpleHTTPServer 8000
``` 
- A quick http server should start.
- In your browser go to [http://localhost:8000/index.html](http://localhost:8000/index.html) and watch the data flow.
