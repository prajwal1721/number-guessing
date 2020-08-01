import React from 'react';
import './input.scss'
import { History } from '../history/history';
import FormInput from '../form-input/form-input';
import { ResponseBack } from '../response/response';
import { Range } from '../range/range';
import { Info } from '../info/info';

class InputBox extends React.Component {
    constructor({ max = 100 }) {
        super();
        this.state = {
            number: '',
            guess: Math.round(Math.random() * parseInt(max) + 1),
            max: max,
            min: 1,
            display: false,
            arr: [],
            area: "LET'S",
            direction: 'START',
            color: 'rgb(230,50,50)',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
        this.check = this.check.bind(this);
    };

    // function to assign the correct color
    check = () => {
        const number = parseInt(this.state.number), guess = this.state.guess;
        if (number > guess) this.setState({ direction: 'high' })
        if (number < guess) this.setState({ direction: 'low' })
        const band = [1, 4, 15];
        const fact = Math.ceil(this.state.max / 100);
        const diff = Math.abs(number - guess);
        switch (true) {
            case diff === 0:
                this.setState({
                    area: 'correct',
                    direction: 'RIGHT', color: 'green'
                })
                break;
            case diff <= band[1] * fact:
                this.setState({ area: 'hot', color: 'red' })
                break;
            case diff <= band[2] * fact:
                this.setState({ area: 'warm', color: 'yellow' })
                break;
            case diff > band[2] * fact:
                this.setState({ area: 'cold', color: 'cyan' })
                break;
            default: break;
        }
    };

    // asynchronous function to handle correct flow of activites on submit or click 
    change = async () => {
        await this.state.arr.push(this.state.number);
        await this.check();
        await this.setState({ number: '' });
    };

    // onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        this.change();
    };

    // function to make sure the user doesn't enter outside the range
    handleChange = (e) => {
        var num = parseInt(e.target.value)
        // console.log(this.state.props);
        console.log(this.state.max);
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

    // render
    render() {
        return (
            <div className='outer-partiton'>
                <div className='inner-partition-left'>
                    <div className='formI'>
                        <form onSubmit={this.onSubmit}>
                            <FormInput
                                handleChange={this.handleChange}
                                label='Enter number'
                                name='number'
                                type='number'
                                value={this.state.number}
                                required
                            />
                            <div style={{
                                color: 'red',
                                fontSize: '20px',
                            }}>{this.state.display ? 'Number is not in range' : null}</div>
                            <button type='submit' className={`custom-button`}>Try my luck</button>
                        </form>
                    </div>
                    <div className='history'>
                        <History arr={this.state.arr} />
                    </div>
                </div>
                <div className='inner-partition-right'>
                    <div className='range'>
                        <Range max={this.state.max} />
                        <Info fact={this.state.max / 100} />
                    </div>

                    <div className='response'>
                        <ResponseBack text={this.state.area} direction={this.state.direction} color={this.state.color} />
                    </div>

                </div>

                {/* on correct guess */}
            <div className='guess'>
                {(this.state.area === 'correct' ?
                    <div>
                        <button>End game</button>
                        <button onClick={() => {
                            this.setState({
                                guess: Math.round(Math.random() * parseInt(this.state.max + 100) + 1),
                                max: parseInt(this.state.max) + 100,
                                number: '',
                                arr: [],
                                area: "LET'S",
                                direction: 'START',
                                color: 'grey',
                            })
                        }}>Next level</button>
                    </div> : null)}
                </div>
            </div>
        )
    }

};

export default InputBox;

