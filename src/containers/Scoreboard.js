import React,{Component,PropTypes} from "react";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import Player from "../components/Player";
import Header from "../components/Header";
import PlayerDetail from "../components/PlayerDetail";
import AddPlayerForm from "../components/AddPlayerForm";
import * as PlayerActionCreators from "../actions/player";

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  render() {

    const { dispatch, players, selectedPlayerIndex, actions: {
      updatePlayerScore,printPlayerInfo,removePlayer,addPlayer
    }} = this.props;

    let selectedPlayer;
    if(selectedPlayerIndex != -1){
        selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player,index) =>
        <Player
        index = {index}
        name = {player.name}
        key = {player.id}
        score = {player.score}
        removePlayer = {removePlayer}
        updatePlayerScore = {updatePlayerScore}
        printPlayerInfo = {printPlayerInfo}
        />
    )

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />

        <div className="player-detail">
          <PlayerDetail selectedPlayer = {selectedPlayer}/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  players: state.players,
  selectedPlayerIndex : state.selectedPlayerIndex
})

const mapDispatchToProps = dispatch => {
  return  {
      actions: bindActionCreators(PlayerActionCreators,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Scoreboard);
