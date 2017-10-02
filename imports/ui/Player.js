import  React from "react";
import {Players}from './../api/players.'
import PropTypes from 'prop-types';
export default class Player extends React.Component {
    render(){
        let itemClassName=`item item--position-${this.props.player.rank}`;
        return (
            <div key={this.props.player._id} className={itemClassName}>
                <div className="player">
                    <div>
                    <h3 className="player_name">{ this.props.player.name}</h3>
                <p className="player_stats">
                    {this.props.player.position} place- {this.props.player.score} points.
                </p>
                    </div>
                    <div className="player_action">
                <button className="button button--round" onClick={()=>{Players.update(this.props.player._id,{$inc:{score:1}})}}>+1</button>
                <button className="button button--round" onClick={()=>{Players.update(this.props.player._id,{$inc:{score:-1}})}}>-1</button>
                <button className="button button--round" onClick={()=>{Players.remove(this.props.player._id)}}>X</button>
                </div>
                </div>
            </div>
        );
    }
};
Player.propTypes={
    player:PropTypes.object.isRequired
};