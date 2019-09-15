import React from 'react';
import {View, Text} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import styles from '../../screens/UserProfile/styles';

class Selector extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.title,
    };
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu(value) {
    this._menu.hide();
    this.setState({
      selected: value,
    });
  }

  showMenu = () => {
    this._menu.show();
  };

  showMenu() {}

  render() {
    return (
      <View style={styles.menuSelector}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text style={styles.selectedSelector} onPress={this.showMenu}>
              {this.state.selected}
            </Text>
          }>
          {this.props.options.map(option => (
            <MenuItem onPress={() => this.hideMenu(option.value)}>
              {option.title}
            </MenuItem>
          ))}
        </Menu>
      </View>
    );
  }
}

export default Selector;
