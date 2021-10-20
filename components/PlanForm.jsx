import React from 'react'
import { TextField, Button, Container, Typography, Grid, Page} from '@mui/material';
import Link from 'next/link'
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import DateFns from '@date-io/date-fns';

export default class PlanForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (

        <form action="submit">
          <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: '100vh'}}
        spacing={2}
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
          <TextField name="plan" onChange={this.onChange} fullWidth margin="normal" label="Plan name"/>
        </Grid>
        <Grid item>
          <TextField name="description" onChange={this.onChange} fullWidth margin="normal" label="Description" />
        </Grid>
        <Grid item>
          <Button variant="contained" justify="right" color="primary" size="small">
            Make a plan
          </Button>
        </Grid>
      </Grid>
      </form>


    )
  }
}
