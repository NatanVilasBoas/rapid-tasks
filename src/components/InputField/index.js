import styles from './InputField.module.css';

function InputField(props){
    return(
        <div className={styles.container}>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField;