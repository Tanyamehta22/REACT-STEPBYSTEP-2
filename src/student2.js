import react from 'react'

export default class student2 extends react.Component{
 
    render()
    {
        console.log(this.props)
        return(
            <div style={{backgrounColor:"skyblue", margin:20}}>
                <h1>Hello{this.props.name}</h1>
                <h3>{this.props.email}</h3></div>
        )
    }
}