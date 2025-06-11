export default function Greeting(props){
    return(
        <div>
            <h1>hello {props.name} ,welcome to our application</h1>
            <p>we are glad to have you here</p>
            <p>{props.userOption}</p>
            {
                props.userOption === 'whoWeAre' ? 'we are the best in twon' :
                props.userOption === 'whyChooseUs' ? 'we make you happy' :
                props.userOption === 'values' ? 'give you the best experince' :
                'please selcet an option'
            }
        </div>

    )
   
}