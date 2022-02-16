# TETR&#46;IO Leaderboard Clone

A remake of [TETR.IO leaderboard](https://ch.tetr.io/players/) built with React (and Express).

## Try it yourself

Do the following steps to get it up and running:

1. Clone this repository to a directory in your local computer.
2. Install the dependencies:
```
> npm install
```
3. Start the proxy server:
```
> npm run startProxy
```
4. Start the app by running:
```
> npm run start
```
5. Open your browser and go to `http://localhost:3000`.

## Pages

### Leaderboard
![Leaderboard](https://user-images.githubusercontent.com/54428874/154258132-f42b53be-b006-4274-bc91-deb77d2f9ce8.png)

### Player Profile
![Player Profile](https://user-images.githubusercontent.com/54428874/154258245-3cac3e6b-fd7c-42ae-87c7-5e88256d7e5b.png)

## API Used

[Tetra Channel API](https://tetr.io/about/api/)

## Outcomes

Here are some of the things I learned while developing this application:

1. Making API calls with [axios](https://www.npmjs.com/package/axios).
2. Use of react `useEffect` hook.
3. Routing with [react-router-dom](https://reactrouter.com/) (static and dynamic).
4. Defining prop types of components.
5. Make pages responsive with CSS media queries.
6. Fixing CORS issues by creating a proxy server in between the web client (React) and the API.
