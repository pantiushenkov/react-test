import * as PlayerActionTypes from "../constants/player";
const uuidv1 = require('uuid/v1');

const INITIAL_STATE = {
	 players: [{
		name: 'Petya',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016',
		id :1
	},
	{
		name: 'Vasya',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016',
		id :2
	},
	{
		name: 'Vova',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016',
		id :3
	}
	],
	selectedPlayerIndex: -1,

}
const getDate = () => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export default function Player(state = INITIAL_STATE,action){
    switch (action.type) {
      case PlayerActionTypes.ADD_PLAYER: {
        const addPlayerList = [...state.players,{
            name:action.name,
            score:0,
						id:  uuidv1(),
            created:getDate()
        }];
        return {
          ...state,
          players : addPlayerList
        }
      }
      case PlayerActionTypes.REMOVE_PLAYER:{
				const newPlayers = state.players.slice();
				newPlayers.splice(action.index,1);
				return {
          ...state,
          players:newPlayers
        }
      }
      case PlayerActionTypes.UPDATE_PLAYER_SCORE:{
        const updatePlayerList = state.players.map((player,index)=>{
            if(index == action.index){
              return {
                ...player,
                score:player.score + action.score,
                updated:getDate()
              }
            }
            return player;
        })
        return {
            ...state,
            players:updatePlayerList
        }
      }
      case PlayerActionTypes.PRINT_PLAYER_INFO:
          return {
            ...state,
            selectedPlayerIndex: action.index
          }

        default:return state
    }
}
