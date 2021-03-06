import React from 'react';
import SoundBars from 'components/SoundBars.js'
import ReactResizeDetector from 'react-resize-detector';


class SoundBarsContainer extends React.Component {

    constructor(props) { 
        super(props);
        let width = window.innerWidth;
        this.barWidth = 55;
        this.state = {
            barCount: Math.ceil(width/this.barWidth), 
        };
        console.log("barCount: ", this.state.barCount);

    }
    
    render() { 

        let soundBars = []; 
        const _onResize = () => {
            let width = window.innerWidth;
            this.barWidth = 55;
            this.setState({
                barCount: Math.ceil(width/this.barWidth),
            });
            console.log("barCount after resizing: ", this.state.barCount);

        }

        const getSection = (index, barCount) => {
            let sectionSize = Math.ceil(barCount/5);
            console.log("section size is: " + sectionSize);
            if (index < sectionSize || index >= (barCount - sectionSize)) {
                if (index === (barCount - 1)) {
                    console.log("I'm the last one");
                    return "outer";
                } else {
                    console.log("outer");
                    return "outer";   
                }  
            } else if (index >= sectionSize*2 && index <= (barCount - sectionSize*2) ) {
                console.log("middle");
                return "middle";
            } else {
                console.log("notOuter");
                return "notOuter";
            }
        }

        for (let i=0; i<this.state.barCount-1; i++) {
            let section = getSection(i, this.state.barCount);
            soundBars.push(<SoundBars section={section}/>)
        } 
        return (
            <div className="soundBarsContainer">
                {soundBars}            
                <ReactResizeDetector handleWidth handleHeight onResize={_onResize.bind(this)} />
            </div>
        );    

    }

    //when the window resizes, it should redefine width and barCount


}

export default SoundBarsContainer;