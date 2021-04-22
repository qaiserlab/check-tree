import React from "react";
import styles from './styles';

import {
  PropsInterface,
  StateInterface
} from "./schema";

export default class CheckTree extends React.Component<
  PropsInterface,
  StateInterface
> {
  public static defaultProps: Partial<PropsInterface> = {
    dataSource: [],
    value: [],
  };

  constructor(props: PropsInterface) {
    super(props);

    this.state = {
      _value: props.value,
    };
  }

  isChecked(key: string) {
    let found = false;

    for (const itemKey of this.state._value) {
      found = itemKey === key;
      if (found) break;
    }

    return found;
  }

  handleChange(key: string,event: any) {
    let newValue = [...this.state._value];

    if (event.target.checked) {
      newValue.push(key);
    }
    else {
      newValue = newValue.filter((_key: string) => (_key !== key));
    }

    this.setState({
      _value: newValue,
    });
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      const event = { target: { value: this.state._value } };
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul style={styles.lv1}>
          { this.props.dataSource.map((item, itemIndex) => { 
            return (
              <li>
                <input 
                  type="checkbox" 
                  checked={this.isChecked(item.key)} 
                  onChange={(event) => { this.handleChange(item.key, event) }}
                />
                {item.title}

                { item.childern && item.childern.map((item, itemIndex) => { 
                  return (
                    <ul style={styles.lv2}>
                      <li>
                        <input 
                          type="checkbox" 
                          checked={this.isChecked(item.key)} 
                          onChange={(event) => { this.handleChange(item.key, event) }}
                        />
                        {item.title}
                      </li>
                    </ul>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
