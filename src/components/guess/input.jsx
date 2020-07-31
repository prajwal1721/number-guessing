import React from 'react';
import './input.scss'
import { History } from '../history/history';
import FormInput from '../form-input/form-input';
class InputBox extends React.Component {
    constructor({ min = 1, max = 100 }) {
        super();
        this.state = {
            number: '',
            guess: Math.round(Math.random() * max + 1),
            max: max,
            min: min,
            display: false,
            arr: [],
            area: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
    };
    check =function() {
        const number = this.state.number, guess = this.state.guess;
        if (number > guess) {
            
        }
        if (number < guess) {
            
        }
        const band= [1, 4, 15];
        const fact = Math.round(this.state.max/100), diff = Math.abs(number - guess);
        
        switch (true) {
            case diff:
                area: 'correct'
                break;
            case (diff <= band[1]):
                area: 'hot'
                break;
            case (diff <= band[2]):
                area: 'warm'
                break;
            default:
                area: 'cold'
                break;
        }
        
    };

    change = async () => {
        await this.state.arr.push(this.state.number);
        await this.setState({ number: '' });
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.number === this.state.guess) { }
        this.change();
    };
    handleChange = (e) => {
        var num = parseInt(e.target.value)
        console.log(this.state.guess);
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
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
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
                        <button type='submit' className={` custom-button`}
                        >
                            Submit
                    </button>
                    </form>
                </div>
                <History arr={this.state.arr} />
                {/* {this.state.arr.length?this.state.arr.map((n)=>`${n}  `):'Start'} */}

            </div>
        )
    }

};

export default InputBox;