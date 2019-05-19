import React from "react";
import ReactDOM from "react-dom";
import Header from './components/layout_components/Header';

interface Props {
    name: string;
}

interface State {
    cat: string;
}

class HelloMessage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            cat: "Fluffeers"
        }
    }

    render() {
        console.log('did u work');

        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
                <h2>My Cats Name is {this.state.cat}</h2>
            </div>
        </div>
    }
}

let App = document.getElementById("CAS-UI-APP");

ReactDOM.render(<HelloMessage name="Yomi" />, App);