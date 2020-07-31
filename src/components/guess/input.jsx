import React from 'react';
import './input.scss'
import { History } from '../history/history';
import FormInput from '../form-input/form-input';
import {ResponseBack} from '../response/response';
import {Range} from '../range/range';


class InputBox extends React.Component {
    constructor( {max=100}) {
        super();
        this.state = {
            number: '',
            guess: Math.round(Math.random() *parseInt(max) + 1),
            max: max,
            min: 1,
            display: false,
            arr: [],
            area: '',
            direction:'',
            color:'white',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
        this.check = this.check.bind(this);
        this.data = this.data.bind(this);
    };
    check =()=> {
        const number = parseInt(this.state.number), guess = this.state.guess;
        if (number > guess) {
            this.setState({direction:'high'})
        }
        if (number < guess) {
            this.setState({direction:'low'})
        }
        const band= [1, 4, 15];
        const fact = Math.ceil(this.state.max/100);
        const diff = Math.abs(number - guess);
        switch (true) {
            case diff===0:
                this.setState({area:'correct',
                direction:''
            })
                break;
            case diff <= band[1]*fact:
                this.setState({area:'hot'})
                break;
            case diff <= band[2]*fact:
                this.setState({area:'warm'})
                break;
            case diff > band[2]*fact:
                this.setState({area:'cold'})
                break;
            default:break;
        }
        
    };
    change = async () => {
        await this.state.arr.push(this.state.number);
        await this.check();
        await this.setState({ number: '' });
        await this.data(this.state.area);
    };
    data=(area)=>{
        var color;
        switch(area){
            case 'correct':
                color='green';break;
            case 'hot':
                color='red';break;
            case 'warm':
                color='yellow';break;
            case 'cold':
                color='blue';break;
            default :
                color='white';break;
        }
        this.setState({color:color})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.change();

    };
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

    render() {
        return (
            <div>
                <div>
                    {this.state.max}
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
                <Range max={this.state.max} />
                <History arr={this.state.arr} />
                <ResponseBack text={this.state.area} direction={this.state.direction} color= {this.state.color} />

                {/* this is not workfing  */}
            {(this.state.area === 'correct' ?
            <div>
                <button onClick={()=>{
                    this.setState({
                        guess: Math.round(Math.random() *parseInt(this.state.max+100) + 1),
                        max:parseInt(this.state.max)+100,
                        number:'',
                        area:'',
                        direction:'',
                        arr:[],
                    })
                }}>Next level</button>
                <button>End game</button>
            </div>

            :null)}
                
            </div>
        )
    }

};

export default InputBox;