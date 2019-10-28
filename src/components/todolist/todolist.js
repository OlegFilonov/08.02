import React from 'react';
import ListView from "./listView/listView";
import ListForm from "./listform/listform";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        const items = localStorage.getItem(this.props.id);

        this.state = {
           items: items ? JSON.parse(items) : this.props.items,
           currentInput: '',
        };
    }

    render() {
        return (
            <div>
                <ListView items={this.state.items}
                          onDelete={(item) => this.deleteItem(item)}
                />
                <ListForm currentInput={this.state.currentInput}
                          onUpdateInput={(input) => this.updateInput(input)}
                            onAddItem={() => this.addItem()}/>
            </div>
        )
    }
    addItem(item) {
        let items = this.state.items.concat(this.state.currentInput);

        this.setState({
            items,
            currentInput: ''
        });

        this.save();
    }

    deleteItem(item) {
        const items = this.state.items.filter(x => x !== item);

        this.setState({
            items
        });

        this.save(items);
    }

    updateInput(input) {
        this.setState({
            currentInput: input
        });
    }

    save(items) {
        localStorage.setItem(this.props.id, JSON.stringify(items))
    }

}