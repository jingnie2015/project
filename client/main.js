import React from 'react';
import ReactDOM from'react-dom';
import{Meteor} from 'meteor/meteor';
import{Tracker} from 'meteor/tracker';
import { Players,calculatePlayerPositions } from './../imports/api/players.';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from "../imports/ui/AddPlayer";
import App from "../imports/ui/App";
import PlayerList from'./../imports/ui/PlayerList';
  Meteor.startup( ()=>{
          Tracker.autorun( () =>{
              let players= Players.find({},{sort:{score:-1}}).fetch();
              let positiondPlayer=calculatePlayerPositions(players)
              let title='Score Keep';
     ReactDOM.render(<App title={title} players={positiondPlayer}/>, document.getElementById('app'));
      });

  });
