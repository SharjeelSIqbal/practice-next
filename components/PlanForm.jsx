import {Component} from 'react';
import { TextField, Button, Container, Typography, Grid, Paper} from '@mui/material';
import Link from 'next/link';
import { DatePicker} from '@material-ui/pickers';


export default class PlanForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    console.log(e.target.reset());
  }

  render() {
    return (
      <Container align="center">
        <form onSubmit={this.onSubmit} action="submit">
         <Grid
        container
        justifyContent="center"
        align="center"
        direction="column"
        style={{minHeight: '100vh', maxWidth: '80%'}}
        spacing={3}
         >
          <Grid item>
            <Typography
              align="center"
              color="textSecondary"
              variant="h6"
              component="h2"
              >
            Make a plan
            </ Typography>
          </Grid>
          <Grid item>
            <TextField name="plan" size="large" onChange={this.onChange} fullWidth margin="normal" label="Plan name"/>
          </Grid>
          <Grid item>
            <TextField name="description" onChange={this.onChange} fullWidth margin="normal" label="Description" />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" align="right" color="primary" size="large">
              Make a plan
            </Button>
          </Grid>
        </Grid>
      </form>
      </Container>

    )
  }
}
