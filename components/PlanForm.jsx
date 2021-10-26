import { Component } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DesktopDatePicker, DesktopTimePicker } from '@mui/lab';

export default class PlanForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      startDate: null,
      endDate: null,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onStartDate = this.onStartDate.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onStartDate(e){
    this.setState({startDate: e});
  }
  onEndDate(e){
    this.setState({endDate: e})
  }


  onSubmit(e){
    e.preventDefault();
    const {... state} = this.state;
    e.target.reset();
    this.setState({startDate: null});
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
        style={{minHeight: '100vh', maxWidth: '100%'}}
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
            <TextField  name="plan" onChange={this.onChange} fullWidth label="Plan name" required/>
          </Grid>
          <Grid item>
            <TextField name="description" onChange={this.onChange} fullWidth label="Description" required/>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item>
                <DateTimePicker
                  label="Start"
                  value={this.state.startDate}
                  minDate={this.state.startDate}
                  onChange={this.onStartDate}
                  renderInput={(params) => <TextField
                    fullWidth {...params} /> }
                   />
            </Grid>
            <Grid item>
              <DateTimePicker
                  label="End"
                  value={this.state.endDate}
                  minDate={this.state.endDate}
                  onChange={this.onEndDate}
                  renderInput={(params) => <TextField
                    fullWidth {...params} />}
                />
            </Grid>
          </LocalizationProvider>
          <Grid item align="right">
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
