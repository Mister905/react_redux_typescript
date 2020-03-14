import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { ICharacterState } from "../../reducers/character_reducer";

interface IProps {
  character: ICharacterState;
}

class CharacterList extends React.Component<IProps> {
  render() {
    const { characters } = this.props.character;
    return (
      <ul>
        {characters &&
          characters.map(character => {
            return (
              <li key={character.name} className="name">
                {character.name}
              </li>
            );
          })}
      </ul>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    character: store.character
  };
};

export default connect(mapStateToProps)(CharacterList);
