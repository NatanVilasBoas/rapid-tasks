import styles from './InputField.module.css';

function InputField(props){

    const onDigit= (e) =>{
        props.saveInfo(e.target.value)    
    }

    return(
        <div className={styles.container}>
            <label>{props.label}</label>
            <input onChange={onDigit} placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}

export default InputField;