import React from 'react';
import ListView from "./listView/listView";
import ListForm from "./listform/listform";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
           items: props.items
        });
    }

    render() {
        return (
            <div>
                <ListView items={this.state.items}/>
                <ListForm onAddItem={(item) => this.addItem(item)}/>
            </div>
        )
    }
    addItem(item) {
        let items = this.state.items.concat(item);

        this.setState({
            items: items
        });
    }
}