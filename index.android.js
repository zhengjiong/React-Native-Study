import React, {Component} from 'react';
import {AppRegistry, Image, View, Text} from 'react-native';

/**
 * Props demo
 */
class Banners extends Component {

    render() {
        let pic = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        };

        return (
            /*
             * 请注意{pic}外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中。
             * 括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
             * 因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
             */
            <Image source={pic} style={{width: 200, height: 200}}/>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            //在Greeting组件中将zz作为一个属性来定制，这样可以复用这一组件来制作各种不同的“问候语”。
            <Text>Hello {this.props.zz}</Text>
        );
    }
}

class GreetingTest extends Component {
    render() {
        return (
            <View>
                <Greeting zz="zhengjiong"/>
                <Greeting zz="遇弯必飘"/>
            </View>

        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        //this.state = true;
        this.state = {showText: true}

        // 每1000毫秒对showText状态做一次取反操作
        /*setInterval(function () {
         //this.setState({showText: !this.state.showText});
         }, 1000);*/
        //这里必须用es6的写法,不然会报错
        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        //let displayText = state.showText ? state.showText : "";
        //必须加this
        let displayText = this.state.showText ? this.props.text : "";
        return (
            <Text>{displayText}</Text>
        );
    }
}

class BlinkTest extends Component {
    render() {
        return (
            <View>
                <Blink text="aaaaaaaaa"/>
                <Blink text="bbbbbbbbb"/>
            </View>

        );

    }
}

AppRegistry.registerComponent("HelloWorld", function () {
    return BlinkTest;
})
/*
 AppRegistry.registerComponent("HelloWorld", function () {
 return GreetingTest;
 })
 */

