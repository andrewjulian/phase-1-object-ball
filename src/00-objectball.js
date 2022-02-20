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
//-----------------------------------------------------------------------------

//stores the game object as a function
const game = gameObject();

//merges player objects from both teams into new object
function mergePlayers () {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    return {...homePlayers, ...awayPlayers}
}


//function that finds player name using the merged object
function findPlayerByName (name) {
    const playersObj = mergePlayers();
    for(const playerKey in playersObj){
        if(playerKey === name){
            return playersObj[playerKey]
        }
    }
}

//function returns points for a player
function numPointsScored(name){
    //const player = findPlayerByName(name);
    //return player ? player.points : "Player not found"
    //return player && player.points
    return findPlayerByName(name)?.points
}

console.log("Points for Player: " + numPointsScored("Brendan Haywood"))

//-----------------------------------------------------------------------------

//function returns shoe size for a player
function playerShoeSize (name) {
    const player = findPlayerByName(name);
    return !!player ? player.shoe : "Player Not Found"
}

console.log("Shoe Size is: " + playerShoeSize("Brendan Haywood"));

//-----------------------------------------------------------------------------

//function that returns the colors for a team
function teamColors(team){
    for(gameKey in game){
        const teamObj = game[gameKey];
        if(teamObj.teamName === team){
            return teamObj.colors
        }
    }
}

console.log("The colors are: " + teamColors("Charlotte Hornets"))

//-----------------------------------------------------------------------------


function teamName() {
    return [game.home.teamName, game.away.teamName]
}

console.log("The Team names are " , teamName())


// -----------------------------------------------------------------------------

//stores the mergePlayers object in a variable
const players = mergePlayers();

//returns the player numbers the selected home or away team

function teamSort(team){
    return (team == "home") ? game.home.players : game.away.players
}

function playerNumbers(team) {
    const teamNumbers = []
    for(let player in teamSort(team)){
        teamNumbers.push(teamSort(team)[player].number)
    }
    return teamNumbers;
}

console.log("Team Numbers ", playerNumbers("away"));

// -----------------------------------------------------------------------------

//returns the stats for a player
function playerStats(playerName){
    for(player in players){
        if(player === playerName){
            return players[playerName];
        }
    }
} 

console.log("Player Stats: " , playerStats("Brendan Haywood"));

// -----------------------------------------------------------------------------

//function to find the player (from both teams) with the largets shoe size
function bigShoeRebounds () {
    //iterate through mergePlayers object
    let biggestShoe = 0;
    let biggestShoePlayer = {}
    for(const playerKey in mergePlayers()) {
        if(mergePlayers()[playerKey].shoe > biggestShoe){
            console.log("Shoe Comparison RUn")
            biggestShoe = playerKey.shoe
            biggestShoePlayer = mergePlayers()[playerKey]
        }
    }
    //return rebounds for the player foundt o have the largest shoe size
    return biggestShoePlayer.rebounds
}

console.log(bigShoeRebounds()); 


