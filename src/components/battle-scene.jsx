import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import * as sounds from '../utils/sound-fx';

import '../../sass/_battle-backgrounds.scss';

class BattleScene extends Component {
  render() {
    return (
      <div className={this.props.battleScene + "-battle battle"}>
        {/*{sounds.normalBattleMusic()}*/}
        {this.props.children}
      </div>
    );
  }
}

BattleScene.propTypes = {
  battleScene: PropTypes.string,
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    battleScene: state.get('battleScene').get('battleScene')
  };
}

export default connect(mapStateToProps, null)(BattleScene);
