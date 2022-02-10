
function gameObject () {
    return {
        home: {
            teamName: "Brooklyn Nets" ,
            colors: ["Black" , "White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                }, 
                "Brooke Lopez" : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                }, 
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                }, 
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets" ,
            colors: ["Turquoise" , "Purple"],
            players: {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                }, 
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                }, 
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                }, 
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    } ;
}

console.log(gameObject());


function homeTeamName(object) {
    return object.home.teamName;
}

console.log(homeTeamName(gameObject()))


//function for points score by name
function numPointsScored(name){
    const game = gameObject();
    for(const gameKey in game){
        const teamObj = game[gameKey];
        for(const teamKey in teamObj){
            const playerObj = teamObj.players
            for(const playerKey in playerObj){
                if(playerKey === name){
                    return playerObj[playerKey].points
                }
            }
        }
    }
}

console.log("Points for Player: " + numPointsScored("Brendan Haywood"))


//function for shoe size by name
function shoeSize(playerName) {
    const game = gameObject();
    for(const gameKeys in game) {
        const teamObj = game[gameKeys];
        for(const teamKeys in teamObj){
            const playerObj = teamObj[teamKeys];
            for(const playerKey in playerObj){
                if(playerKey === playerName){
                    return playerObj[playerKey].shoe
                }
            }
        }
    }
}

console.log("Shoe Size is: " + shoeSize("Brendan Haywood"));


//function for team colors
function teamColors(team){
    const game = gameObject();
    for(gameKey in game){
        const teamObj = game[gameKey];
        for(teamKey in teamObj){
            if(teamObj[teamKey] === team){
                return teamObj.colors
            }
        }
    }
}

console.log("The colors are: " + teamColors("Brooklyn Nets"))


function teamName() {
    const teamNameList = [];
    const game = gameObject();
    for(gameKey in game){
        const teamObj = game[gameKey]
        for (teamKey in teamObj){
            if(teamKey === "teamName"){
                console.log("this is working")
                teamNameList.push(teamObj[teamKey]);
                console.log(teamNameList);
            }
        }
    }
    return teamNameList;
}

console.log("Team Name: " + teamName());

const game = gameObject();
const homePlayers = game.home.players;
const awayPlayers = game.away.players;

function playerNumbers(object) {
    const teamNumbers = []
    for(player in object){
        teamNumbers.push(object[player].number)
    }
    return teamNumbers;
}

console.log(playerNumbers(homePlayers));
console.log(playerNumbers(awayPlayers));

const players = Object.assign({}, homePlayers, awayPlayers);

/*
function playerStats(playerName){
    for(player in players){
        if(player === playerName){
            console.log("Player Stats comparison is working");
            return [playerName];
        }
    }
}
*/


function playerStats(playerName){
    return players[playerName];
}

console.log("Player Stats: " , playerStats("Brendan Haywood"));