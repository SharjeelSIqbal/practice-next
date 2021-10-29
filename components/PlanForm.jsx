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
    this.onEndDate = this.onEndDate.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
    const {plan, description, startDate, endDate} = this.state;
    const formData = {plan, description, startDate, endDate};
    formData.userId = 1;
    this.submitForm(formData)
    e.target.reset();

  }

  async submitForm(data){
    console.log(data);
    this.setState({ startDate: null, endDate: null });
    await fetch('/api/plan', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => console.error(err));
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
                  label="Start data and time"
                  value={this.state.startDate}
                  minDate={this.state.startDate}
                  onChange={this.onStartDate}
                  renderInput={(params) => <TextField
                    fullWidth {...params} required /> }
                   />
            </Grid>
            <Grid item>
              <DateTimePicker
                  label="End date and time"
                  value={this.state.endDate}
                  minDate={this.state.endDate}
                  onChange={this.onEndDate}
                  required
                  renderInput={(params) => <TextField
                    fullWidth {...params} required />}
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
