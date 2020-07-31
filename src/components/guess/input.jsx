import React from 'react';
import './input.scss'
import { History } from '../history/history';
import FormInput from '../form-input/form-input';
class InputBox extends React.Component {
    constructor({ min = 1, max = 100 }) {
        super();
        this.state = {
            number: '',
            max: max,
            min: min,
            display: false,
            arr: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    onSubmit = (e) => {
        console.log(e.target.value)
        // this.setState({arr:this.state.arr.push(e.target.value)})

    };
    handleChange = (e) => {
        var num = parseInt(e.target.value)
        if (isNaN(num) || num < this.state.min || num > this.state.max) {
            num = '';
            this.setState({
                number: num,
                display: true
            });
        }
        else
            this.setState({
                display: false
            });
        this.setState({ number: num });
    }

    render() {
        return (
            <div>
                <div>

                    <FormInput
                        handleChange={this.handleChange}
                        label='Enter number'
                        name='number'
                        type='number'
                        value={this.state.number}
                        required
                    />
                    <div
                        style={
                            {
                                color: 'red',
                                fontSize: '20px',
                            }
                        }>
                        {this.state.display ? 'Number is not in range' : null}
                    </div>
                    <button className={` custom-button`}
                        onSubmit={this.onSubmit}>
                        Submit
                    </button>

                </div>
                <History arr={this.state.arr} />
            </div>
        )
    }

};

export default InputBox;