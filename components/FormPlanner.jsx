import styles from '../styles/Form.module.css';
import layoutStyles from '../styles/PageLayout.module.css';
import { Component } from 'react';
export default class FormPlanner extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form action="submit" className={styles.form}>
        <label>Make a plan
          <div className={styles.label}>
            <input type="text" className={styles.plan} />
          </div>
        </label>
        <div className={styles.submitDiv}>
          <button type="submit" className={styles.submit}>Submit</button>
        </div>
      </form>
    )
  }
}
